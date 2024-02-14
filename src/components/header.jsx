import { useState } from "react";
import { NavLink } from "react-router-dom";

function Header() {
    const [isMenuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen)
    }

    return (
        <div className="container">
            <header>
                <ul className={`menu ${isMenuOpen ? 'open' : ''}`}>
                    <li><NavLink to="/blogs">Blog</NavLink></li>
                    <li><NavLink to="/works">Works</NavLink></li>
                    <li><NavLink to="/">Contacts</NavLink></li>
                </ul>
                <button className={`burger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <span className="line line-1"></span>
                    <span className="line line-2"></span>
                    <span className="line line-3"></span>
                </button>
            </header>
        </div>
    );
}

export default Header;