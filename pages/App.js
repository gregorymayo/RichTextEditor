import { useMemo, useState } from 'react'
import { createEditor, Editor, Transforms, Text } from 'slate'
import { Slate, Editable, withReact } from 'slate-react'
import DefaultElement from './textElement/DefaultElement.js'
import CodeElement from './textElement/CodeElement.js'
import LeftAlign from './textAlign/LeftAlign.js'
import CenterAlign from './textAlign/CenterAlign.js'
import RightAlign from './textAlign/RightAlign.js'
import CodeStyle from './textStyle/CodeStyle.js'
import { Button } from 'antd'
import {
    BoldOutlined,
    ItalicOutlined,
    UnderlineOutlined,
    CodeOutlined,
    AlignLeftOutlined,
    AlignCenterOutlined,
    AlignRightOutlined

} from '@ant-design/icons'
import styles from '../styles/Home.module.css'

const CustomEditor = {
    isBoldMarkActive(editor) {
        // A root-level Editor node that contains the entire document's content.
        const [match] = Editor.nodes(editor, {
            match: n => n.bold === true,
        })
        // !! way of casting a "truthy" or "falsy"
        return !!match
    },
    toggleBoldMark(editor) {
        const isActive = CustomEditor.isBoldMarkActive(editor)
        // Transforms are functions that let us change the editor's value.
        Transforms.setNodes(
            editor,
            { bold: isActive ? null : true },
            { match: n => Text.isText(n), split: true }
        )
    },
    isItalicMarkActive(editor) {
        const [match] = Editor.nodes(editor, {
            match: n => n.italic === true,
        })
        return !!match
    },
    toggleItalicMark(editor) {
        const isActive = CustomEditor.isItalicMarkActive(editor)
        Transforms.setNodes(
            editor,
            { italic: isActive ? null : true },
            { match: n => Text.isText(n), split: true }
        )
    },
    isUnderlineMarkActive(editor) {
        const [match] = Editor.nodes(editor, {
            match: n => n.underline === true,
        })
        return !!match
    },
    toggleUnderlineMark(editor) {
        const isActive = CustomEditor.isUnderlineMarkActive(editor)
        Transforms.setNodes(
            editor,
            { underline: isActive ? null : true },
            { match: n => Text.isText(n), split: true }
        )
    },
    isCodeBlocMarkActive(editor) {
        const [match] = Editor.nodes(editor, {
            match: n => n.type === 'code',
        })
        return !!match
    },
    toggleCodeBlockMark(editor) {
        const isActive = CustomEditor.isCodeBlocMarkActive(editor)
        Transforms.setNodes(
            editor,
            { type: isActive ? 'paragraph' : 'code' },
            { match: n => Editor.isBlock(editor, n) }
        )
    },
    isLeftAlignTextActive(editor) {
        const [match] = Editor.nodes(editor, {
            match: n => n.type === 'left',
        })
        return !!match
    },
    toggleLeftAlignTextMark(editor) {
        const isActive = CustomEditor.isLeftAlignTextActive(editor)
        Transforms.setNodes(
            editor,
            { type: isActive ? 'paragraph' : 'left' },
            { match: n => Editor.isBlock(editor, n) }
        )
    },
    isCenterAlignTextActive(editor) {
        const [match] = Editor.nodes(editor, {
            match: n => n.type === 'center',
        })
        return !!match
    },
    toggleCenterAlignTextMark(editor) {
        const isActive = CustomEditor.isCenterAlignTextActive(editor)
        Transforms.setNodes(
            editor,
            { type: isActive ? 'paragraph' : 'center' },
            { match: n => Editor.isBlock(editor, n) }
        )
    },
    isRightAlignTextActive(editor) {
        const [match] = Editor.nodes(editor, {
            match: n => n.type === 'right',
        })
        return !!match
    },
    toggleRightAlignTextMark(editor) {
        const isActive = CustomEditor.isRightAlignTextActive(editor)
        Transforms.setNodes(
            editor,
            { type: isActive ? 'paragraph' : 'right' },
            { match: n => Editor.isBlock(editor, n) }
        )
    }
}

const App = () => {
    const editor = useMemo( () => withReact(createEditor()), []) // Slate editor object
    const [value, setValue] = useState([
        {
          type: 'paragraph',
          children: [{ text: 'A line of text in a paragraph.' }],
        },
    ])
    const changeElement = props => {
        switch (props.element.type) {
            case 'code':
                return <CodeElement {...props} />
            case 'left':
                return <LeftAlign {...props} />
            case 'center':
                return <CenterAlign {...props} />
            case 'right':
                return <RightAlign {...props} />
            default:
                return <DefaultElement {...props} />
          }
    }
    const changeStyle = props => {
        return <CodeStyle {...props} />
    }

    return (
        <div>
            <h1 className={styles.title}>
                Rich Text Editor
            </h1>
            <Button
                className={styles.buttonStyle}
                icon={<BoldOutlined />}
                onClick={
                    event => {
                        event.preventDefault()
                        CustomEditor.toggleBoldMark(editor)
                    }
                }
            />
            <Button
                className={styles.buttonStyle}
                icon={<ItalicOutlined />}
                onClick={
                    event => {
                        event.preventDefault()
                        CustomEditor.toggleItalicMark(editor)
                    }
                }
            />
            <Button
                className={styles.buttonStyle}
                icon={<UnderlineOutlined />}
                onClick={
                    event => {
                        event.preventDefault()
                        CustomEditor.toggleUnderlineMark(editor)
                    }
                }
            />
            <Button
                className={styles.buttonStyle}
                icon={<CodeOutlined />}
                onClick={
                    event => {
                        event.preventDefault()
                        CustomEditor.toggleCodeBlockMark(editor)
                    }
                }
            />
            <Button
                className={styles.buttonStyle}
                icon={<AlignLeftOutlined />}
                onClick={
                    event => {
                        event.preventDefault()
                        CustomEditor.toggleLeftAlignTextMark(editor)
                    }
                }
            />
            <Button
                className={styles.buttonStyle}
                icon={<AlignCenterOutlined />}
                onClick={
                    event => {
                        event.preventDefault()
                        CustomEditor.toggleCenterAlignTextMark(editor)
                    }
                }
            />
            <Button
                className={styles.buttonStyle}
                icon={<AlignRightOutlined />}
                onClick={
                    event => {
                        event.preventDefault()
                        CustomEditor.toggleRightAlignTextMark(editor)
                    }
                }
            />
            <div className={styles.grid}>
                <div className={styles.textArea}>
                    <Slate editor={editor} value={value} onChange={newVal => setValue(newVal)}>
                        <Editable
                            editor={editor}
                            renderElement={changeElement}
                            renderLeaf={changeStyle}
                        />
                    </Slate>
                </div>
            </div>
        </div>
    )
}

export default App
