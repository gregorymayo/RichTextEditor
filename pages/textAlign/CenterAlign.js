const CenterAlign = props => {
    return (
        <p
            {...props.attributes}
            style={{
                textAlign: 'center'
            }}
        >
            {console.log(props)}
            {props.children}
        </p>
    )
}

export default CenterAlign
