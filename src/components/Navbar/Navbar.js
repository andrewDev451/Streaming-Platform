import React, {useEffect, useState} from 'react'
import "./Navbar.css"

const Navbar = () => {
    const [show, handleShow] = useState(false)

    useEffect(() => {
        // scroll Listener
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true)
            } else handleShow(false)
        })
        return () => {
            window.addEventListener("scroll")
        }
    }, [])

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img
                className="nav__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png"
                alt="Netflix Logo"
            />

            <img
                className="nav__avatar"
                src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png"
                alt="Profile Avatar"
            />
        </div>
    )
}

export default Navbar