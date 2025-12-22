function Hello1({user})
{
    return(
        <>
        <h1>{user.name}</h1>
        </>
    )
}

export function Fac()
{
    let obj={
        "name":"Khushi",
        "age":19,
        "course":"mern-stack"
    }

    return(
        <>
        <Hello1 user={obj}/>
        </>
    )
}

export default Hello1;