import { useMemo, useState } from 'react'
import { createEditor } from 'slate'
import { Slate, Editable, withReact } from 'slate-react'
import DefaultElement from './textElement/DefaultElement.js'
import CodeElement from './textElement/CodeElement.js'
import LeftAlign from './textAlign/LeftAlign.js'
import CenterAlign from './textAlign/CenterAlign.js'
import RightAlign from './textAlign/RightAlign.js'
import CodeStyle from './textStyle/CodeStyle.js'
import ButtonBar from './buttonBar/ButtonBar.js'
import styles from '../styles/Home.module.css'

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
            <ButtonBar
                editor={editor}
            />
            <div className={styles.grid}>
                <div className={styles.textArea}>
                    <Slate
                        editor={editor}
                        value={value}
                        onChange={
                            value => setValue(value)
                        }
                    >
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
