import React, { useEffect, useState } from "react";
import Header from "../componets/Header";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditPerson = () => {
  const [Edit, setEdit] = useState(null)
  const [firstName, setfirstName] = useState("")
  const [LastName, setlastname] = useState("")
  const [PhoneNumber, setphoneNumber] = useState("")
  const [category, setCategory] = useState("")
  const navigate = useNavigate()
  const params = useParams()


  const deletePerson = () => {
    if (window.confirm("silmek istediğinize eminmisiniz") === true) {
      axios.delete(`http://localhost:3004/persons/${params.personId} `)
        .then(res => {
          navigate("/")
        })
        .catch(err => { })
    }
  }




  useEffect(() => {

    axios.get(`http://localhost:3004/persons/${params.personId}`)
      .then(res => {
        console.log(res.data);
        setEdit(res.data)
        setfirstName(res.data.firstName)
        setlastname(res.data.lastName)
        setphoneNumber(res.data.PhoneNumber)
        setCategory(res.data.category)

      })
      .catch(err => { })
  }, [])



  const handlgüncelle = (e) => {
    e.preventDefault()

    if (firstName === "" || LastName === "" || PhoneNumber === "") {
      alert("bütün alanlar zorunludur")
      return
    }
    const editperson = {
      id: params.personId,
      firstName: firstName,
      lastName: LastName,
      PhoneNumber: PhoneNumber,
      category: category


    }
    axios.put(`http://localhost:3004/persons/${params.personId}`, editperson)

      .then(res => {
        navigate("/")

      })
      .catch(err => {
        alert("güncelleme esnasında bir hata oluştu")

      })
  }
  if (Edit === null) {
    return null
  }

  return (
    <div>
      <Header />


      <div className="container my-5">
        <form onSubmit={handlgüncelle}>
          <div className=" mb-3">
            <label htmlFor="name" className="">Name</label>
            <input type="text" className="form-control" id="name" placeholder="name"
             value={firstName} 
             onChange={(e) => setfirstName(e.target.value)} />
          </div>
          <div className=" mb-3">
            <label htmlFor="lastname" className="">LastName</label>
            <input type="text" className="form-control"
             id="lastname"
              placeholder="Lastname"
               value={LastName} onChange={(e) => setlastname(e.target.value)} />
          </div>
          <div className=" mb-3">
            <label htmlFor="number" className="">PhoneNumber</label>
            <input type="number" className="form-control" id="number"
             placeholder="PhoneNumber"
              value={PhoneNumber} onChange={(e) => setphoneNumber(e.target.value)} />
          </div>
          <div className="m-1 container">
            <div className="input-group my-3 w-25 my-2  ">
              <label
                className="input-group-text bg-secondary text-light"
                htmlFor="category"
              >
                Category
              </label>
              <select
                className="form-select "
                id="category"
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                  console.log(e.target.value);
                }}
              >
                <option value="0">All</option>
                <option value="family">Family</option>
                <option value="friend">Friend</option>
                <option value="business">Business</option>
                <option value="general">General</option>
                <option value="general">Cousin</option>
              </select>
            </div>
          </div>

          <div className="m-3 my-1 w-50">
            <button className="btn btn-primary inline-block w-50 ml-1 " type="submit">kaydet</button>


          </div>


        </form>

        <div className=" container w-50 m-2">
          <button onClick={deletePerson} className="btn btn-danger inline-block w-50 "> sil</button>
        </div>
      </div>


    </div>



  )
}

export default EditPerson