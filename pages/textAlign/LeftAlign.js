const LeftAlign = props => {
    return (
        <p
            {...props.attributes}
            style={{
                textAlign: 'left'
            }}
        >
            {props.children}
        </p>
    )
}

export default LeftAlign
