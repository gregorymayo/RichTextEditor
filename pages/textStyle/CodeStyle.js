import { useState, useEffect } from 'react'

const CodeStyle = props => {
    const [boldText, setBoldText] = useState()
    const [italicText, setItalicText] = useState()
    const [underlineText, setUnderlineText] = useState()

    useEffect(() => {
        setBoldText(props.leaf.bold ? 'bold' : 'normal')
        setItalicText(props.leaf.italic ? 'italic' : 'normal')
        setUnderlineText(props.leaf.underline ? 'underline' : 'none')
    }, [props.leaf])

    return (
        <span
            {...props.attributes}
            style={{
                fontWeight: boldText,
                fontStyle: italicText,
                textDecoration: underlineText
            }}
        >
            {console.log(props)}
            {props.children}
        </span>
    )
}

export default CodeStyle
