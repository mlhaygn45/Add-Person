import React, { useEffect, useState } from "react";
import {Link}from "react-router-dom"



const ListPerson = ({ person,  }) => {
   const[searchtext,setSearchtext]=useState("") 
   const[filterperson,setfilterperson]=useState(person)
   
    
useEffect(()=>{
    
const fitr=person.filter(item => item.firstName.includes(searchtext) === true)
setfilterperson(fitr)
},[searchtext]) 


    return (


        <div className="container ">
          
            <h1 className="text-center my-3" >KİSİLER</h1>
       <div className=" d-flex justify-content-center align-items-center">
      <div className="">
      <input class="form-control" type="text" placeholder="seach" value={searchtext} onChange={(e)=>setSearchtext(e.target.value)} />
      </div>
            

       <div className="d-flex justify-content-start align-items-center center my-5">
       <Link className="btn btn-primary  " to={"/Add-person"}>Kisi ekle</Link>
       </div>
       </div>
       

       
            <table className="table w-50  container table-striped ">
                <thead>            
                       <tr>

                        <th scope="col"> </th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody >

                    {
                        person.length === 0 ? (
                            <tr>
                                <td colSpan={4}> kayıtlı  kisi bulunmamaktadır</td>
                            </tr>
                        ) : (
                            <>
                                {
                                    filterperson.map((person, index) => (
                                        <tr className=""  key={person.id}>
                                            <th scope="row">{index + 1} </th>
                                            <td> {person.firstName} </td>
                                            <td>{person.lastName} </td>
                                            <td>{person.PhoneNumber} </td>
                                            <td>{person.category} </td>
                                            <td>
                                            <div className="btn-group" role="group" aria-label="Basic example">
  
  <Link to={`/edit-person/${person.id}`} className="btn btn-outline-danger"><i class="bi bi-pen-fill"></i></Link>
  
</div>
                                            </td>
                                        </tr>
                                    ))
                                }

                            </>

                        )
                    }



                </tbody>
            </table>

        </div>
    )

}

export default ListPerson