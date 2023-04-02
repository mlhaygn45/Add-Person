import React from "react";
import { Link } from "react-router-dom"
import "../componets/CSS Dosyası/Header.css"








const Header = ({ whicPage }) => {
    console.log(whicPage);
    var bgclass = ""
    if (whicPage === "home") {
        bgclass = "homebg"
    }


    if (whicPage === "addperson") {
        bgclass = "addpersonbg"
    }



    return (

        <header className={`headerContainer ${bgclass} `} >
            <nav className="navbar">
                <ul className="item-navlink">
                    <li>
                        <Link className="activLink" to={"/"}> HOME</Link>
                    </li>

                    <li>
                        <Link to={"/Add-person"} >  ADD PERSON</Link>
                    </li>

                    <li>
                        <Link to={"/edit-person"} > EDİT</Link>
                    </li>
                </ul>



            </nav>

        </header>




    )
}

export default Header