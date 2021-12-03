const CodeElement = props => {
    return (
        <code {...props.attributes}>
            {props.children}
        </code>
    )
}

export default CodeElement
