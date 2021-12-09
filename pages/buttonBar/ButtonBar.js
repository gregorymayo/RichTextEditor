import { Editor, Transforms } from 'slate'
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
import styles from '../../styles/Home.module.css'

export const CustomEditor = {
    isBoldMarkActive(editor) {
        // A root-level Editor node that contains the entire document's content.
        const [match] = Editor.nodes(editor, {
            match: n => n.bold === true
        })
        // !! way of casting a "truthy" or "falsy"
        return !!match
    },
    toggleBoldMark(editor) {
        const isActive = CustomEditor.isBoldMarkActive(editor)
        if(isActive) {
            Editor.removeMark(editor, "bold")
        } else {
            Editor.addMark(editor, "bold", true)
        }
    },
    isItalicMarkActive(editor) {
        const [match] = Editor.nodes(editor, {
            match: n => n.italic === true
        })
        return !!match
    },
    toggleItalicMark(editor) {
        const isActive = CustomEditor.isItalicMarkActive(editor)
        if(isActive) {
            Editor.removeMark(editor, "italic")
        } else {
            Editor.addMark(editor, "italic", true)
        }
    },
    isUnderlineMarkActive(editor) {
        const [match] = Editor.nodes(editor, {
            match: n => n.underline === true
        })
        return !!match
    },
    toggleUnderlineMark(editor) {
        const isActive = CustomEditor.isUnderlineMarkActive(editor)
        if(isActive) {
            Editor.removeMark(editor, "underline")
        } else {
            Editor.addMark(editor, "underline", true)
        }
    },
    isCodeBlocMarkActive(editor) {
        const [match] = Editor.nodes(editor, {
            match: n => n.type === 'code'
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
            match: n => n.type === 'left'
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
            match: n => n.type === 'center'
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
            match: n => n.type === 'right'
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

const ButtonBar = ({ editor }) => {
    return (
        <>
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
        </>
    )
}

export default ButtonBar
