import { Component } from "react";

class Uselife extends Component{

    constructor()
    {
        super()
        this.state={
            name:"Khushi"
        }
        console.log("constructor called")
    }

    componentDidMount()
    {
        console.log("Phase 1..")
    }

    componentDidUpdate()
    {
        console.log("Phase 2..")
    }

    componentWillUnmount()
    {
        console.log("Phase 3..")
    }

    render()
    {
        return(
            <>
                <h1>value of this : {this.state.name}</h1>
                <button onClick={()=>this.setState({name:"Juhi"})}>Click here.. </button>
            </>
        )
    }
}
export default Uselife;