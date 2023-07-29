import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <nav>
            <NavLink to={"home"}>Home</NavLink>
            <NavLink to={"about"}>About</NavLink>
            <NavLink to={"allTours"}>All Tours</NavLink>
            <NavLink to={"gallery"}>Gallery</NavLink>
            <NavLink to={"contact"}>Contact</NavLink>
        </nav>
    </div>
  )
}

export default Header