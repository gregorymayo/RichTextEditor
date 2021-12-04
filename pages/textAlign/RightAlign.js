const RightAlign = props => {
    return (
        <p
            {...props.attributes}
            style={{
                textAlign: 'right'
            }}
        >
            {props.children}
        </p>
    )
}

export default RightAlign
