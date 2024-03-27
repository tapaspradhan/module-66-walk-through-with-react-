function Person(props) {
    const name="Tapas"
    return(
        <p>
            {props.name} is {props.age} years old.
        </p>
    ) 
}

export default Person