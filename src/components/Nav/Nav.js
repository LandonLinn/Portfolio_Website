import styles from "./Nav.module.css"
import { NavLink } from "react-router-dom";

function Nav ({onClose}){

    const navLinks = [
        {path: "/", label: "HOME"},
        {path: "/About", label: "ABOUT"},
        {path: "/Skills", label: "SKILLS"},
        {path: "/Portfolio", label: "PORTFOLIO"},
        {path: "/Contact", label: "CONTACT"},
    ];

    return (

        <nav>
            <ul className={styles.navContainer}>
                <hr/>
                {navLinks.map((link, index) => (
                    <li key={index}>
                    <NavLink 
                      to={link.path} 
                      onClick={onClose}
                      className={({ isActive }) => (isActive ? styles.activeLink : styles.inactiveLink)}
                    >
                      {link.label}
                    </NavLink>
                    <hr />
                  </li>
                ))}
            </ul>
        </nav>
      );
}

export default Nav;