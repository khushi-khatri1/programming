import { getdata } from "./get_api";
import { useState,useEffect } from "react";
import './index.css'

export const Post=()=>{

    const [data,setData]=useState([]);

    const showdata = async ()=>{
        const res = await getdata();
        console.log(res);
        setData(res.data);
    }

    useEffect(()=>{
        showdata();
    },[])

   /* return(
        <div>
        {
            data.map((currentelement)=>{
                const {id,title,body} = currentelement;
                return(
                    <>
                    <p>{id}</p>
                    <h2>{title}</h2>
                    <p>{body}</p>
                    </>
                )
                
            })
        }
        </div>
    )*/

         return (
            <div className="ca">
            {
                data.slice(0,9).map((currentelement)=>{
                const {id,title,body} = currentelement;
                return(
                   
                    <div className="card" style={{ width: "18rem" }} key={id}>
                        <div className="card-body">
                            <h3 className="card-title">{id}</h3>
                            <h2 className="card-title">{title}</h2>
                            <p className="card-text">{body}</p>
                            <a href="#"><button className="btn btn-primary">Read More</button></a>
                        </div>
                    </div>
                  
                    )
            })
            }
          </div>
         )

};
