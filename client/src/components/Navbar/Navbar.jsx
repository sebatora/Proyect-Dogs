import React from "react";
import style from "./Navbar.module.css"
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className={style.NavContainer}>

    <div className={style.navLink}>
        <Link to="/home" className={style.navHome}>
          <button className="btn">Home</button>
        </Link>

        <Link to="/create" className={style.navFavourites}>
          <button className="btn">Create your dog</button>
        </Link>

        <Link to="/about" className={style.navAbout}>
          <button className="btn">About</button>
        </Link>

        <Link to="/exit" className={style.navExit}>
          <button className="btn">Exit</button>
        </Link>
    </div>
  </nav>
  )
}

export default Navbar