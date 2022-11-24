import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const links = [
        {
            id: 1,
            path: "/",
            text: "todo",
        },
        {
            id: 2,
            path: "/about",
            text: "About",
        },
    ];
    const handleToggle = () => {
        setNavbarOpen(!navbarOpen);
    }
    const closeMenu = () => {
        setNavbarOpen(false)
    }
    let activeClassName = "active-link";
    return (

        <nav className="navBar">
            <button onClick={handleToggle}>
                {navbarOpen ?
                    (<MdClose style={{ color: "#fff", width: "40px", height: "40px" }} />)
                    : (<FiMenu style={{ color: "#7b7b7b", width: "40px", height: "40px" }} />)
                }
            </button>
            <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
                {links.map(link => {
                    return (
                        <li key={link.id}>
                            <NavLink to={link.path}
                                className={({ isActive }) =>
                                    isActive ? activeClassName : undefined
                                }
                                onClick={() => { closeMenu() }}
                                >{link.text}</NavLink>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Navbar