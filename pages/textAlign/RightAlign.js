const RightAlign = props => {
    return (
        <p
            {...props.attributes}
            style={{
                textAlign: 'right'
            }}
        >
            {console.log(props)}
            {props.children}
        </p>
    )
}

export default RightAlign
