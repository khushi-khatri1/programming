import { createContext ,useContext } from "react";

import { Example } from "./context_api1";

const User_value=()=>
{
    const {user} = useContext(Example);
    return(
        <div>
            <h3>Name : {user.name}</h3>
            <h3>ID:{user.id}</h3>
        </div>
    )
}

export default User_value;