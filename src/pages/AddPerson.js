import React, { useEffect, useState } from "react";
import Header from "../componets/Header";
import axios from "axios";
import { useNavigate } from "react-router-dom"


const Addperson = () => {
  const navigate = useNavigate()
  const [firstname, setfirstname] = useState("")
  const [lastname, setlastname] = useState("")
  const [phoneNumber, setphoneNumber] = useState("")
  const [category, setCategory] = useState("0")
  const [students, setStudents] = useState(null)

  const savePerson = (e) => {
    e.preventDefault()

    if (
      firstname === "" ||
      lastname === "" ||
      phoneNumber === ""
    ) {
      alert("boş alan bırakılamaz")
      return
    }
    if (category === "0") {
      return alert("ALL  seçilemez")
    }



    const hasStudent = students.find((x) => x.PhoneNumber === phoneNumber)
    if (hasStudent !== undefined) {

      alert(`${phoneNumber} numarası zaten vardır`)
      return
    }


    const newperson = {
      id: String(new Date().getTime()),
      firstName: firstname,
      lastName: lastname,
      PhoneNumber: phoneNumber,
      category: category
    }
    axios.post("http://localhost:3004/persons", newperson)

      .then(res => {
        navigate("/")

      })
      .catch(err => { });



  }

  useEffect(() => {

    axios.get("http://localhost:3004/persons")
      .then(res => {
        setStudents(res.data)
      })
      .catch(err => { })
  }, [])

  if (students === null) {
    return null

  }


  return (
    <div>

      <Header whicPage={"addperson"} />
      <div className="container my-5 ">
        <form onSubmit={savePerson}>
          <div className="mb-3 ">
            <label htmlfor="firstname1" class="form-label">Name</label>
            <input type="text" className="form-control" id="firstname1" placeholder="name"
             value={firstname} onChange={(e) => setfirstname(e.target.value)} />

          </div>

          <div className="mb-3 ">
            <label htmlfor="lastname" class="form-label">LastName</label>
            <input type="text" class="form-control" id="lastname" placeholder="lastname"
             value={lastname} onChange={(e) => setlastname(e.target.value)} />

          </div>

          <div className="mb-3 ">
            <label htmlfor="number" class="form-label">number</label>
            <input type="text" class="form-control" id="number" placeholder="number"
             value={phoneNumber} onChange={(e) => setphoneNumber(e.target.value)} />

          </div>

          <div className="input-group my-4">
            <label
              className="input-group-text bg-secondary text-light"
              htmlFor="category"
            >
              select category
            </label>
            <select
              className="form-select"
              id="category"
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
                console.log(e.target.value);
              }}
            >
              <option value="all">All</option>
              <option value="family">Family</option>
              <option value="friend">Friend</option>
              <option value="business">Business</option>
              <option value="general">General</option>
              <option value="Cousin">Cousin</option>
            </select>
          </div>
          <div>
            <button className="btn btn-danger w-50 " type="submit"> Ekle</button>
          </div>


        </form>

        <div class="btn-group" role="group" aria-label="Basic example">


        </div>
      </div>
    </div>

  )
}

export default Addperson