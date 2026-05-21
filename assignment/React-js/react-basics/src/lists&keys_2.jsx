import React from "react";

function Keys()
{
    const users = [
        {id:1,name:"Mihir"},
        {id:2,name:"Khushi"},
        {id:3,name:"Anjali"},
        {id:4,name:"Hetvi"},
        {id:5,name:"Margi"}
    ];

    const renderUsers =()=>{
        return users.map((item) =>(
        <p key={item.id}>{item.name}</p>
        ))
    }

    return(
        <>
            <p>--------------------------------------------------------------------------------------------------------------------------</p>     
            <h3>{renderUsers()}</h3>
        </>
    )
}

export default Keys;