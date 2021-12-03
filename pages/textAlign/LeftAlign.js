const LeftAlign = props => {
    return (
        <p
            {...props.attributes}
            style={{
                textAlign: 'left'
            }}
        >
            {console.log(props)}
            {props.children}
        </p>
    )
}

export default LeftAlign
