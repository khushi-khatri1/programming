import React,{createContext} from "react";

export const Example = createContext();

const Example_context=({children})=>{
    const user = {name: "khushi khatri", id: 1};
    
    return(
        <Example.Provider value={{user}}>
            {children}
        </Example.Provider>
    )
}

export default Example_context;