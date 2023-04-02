import React, { useEffect, useState } from "react";
import Header from "../componets/Header";
import ListPerson from "../componets/ListPerson";
 import axios from "axios";
const Home =()=>{

    const[person,setperson]=useState(null)




    useEffect(() => {
        axios
          .get("http://localhost:3004/persons")
          .then((res) => {
            setperson(res.data);
          })
          .catch((err) => {});
      }, []);

    if(person===null){
        return null
    } 
    return(
        <div>
<Header   whicPage={"home"} />
<ListPerson person={person}  />    

        </div>
    )
}

export default  Home

