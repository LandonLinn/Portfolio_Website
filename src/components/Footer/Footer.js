import { NavLink } from "react-router-dom";
import ContactButton from "../ContactButton/ContactButton";
import SocialLinks from "../SocialLinks/SocialLinks";
import styles from "./Footer.module.css";

function Footer () {
    return (
        <div>
            <div className={styles.footerContainer}>

                <div className={styles.infoContainer}>  

                    <div className={styles.nameContainer}>
                        <img src="./assets/Personal Logo - Transparent.png" alt="Personal Logo" className={styles.logo}/>  
                        <div className={styles.desc}>
                            <h2>Landon Linn</h2>
                            <p>Student at The University of Tennessee</p>
                        </div>
                    </div>
                        
                    <ContactButton />

                    <SocialLinks />

                </div>

                <div className={styles.exploreContainer}>
                    <p>Explore</p>
                    <NavLink to="/" className={styles.links}>HOME</NavLink>
                    <NavLink to="/About" className={styles.links}>ABOUT</NavLink>
                    <NavLink to="/Skills" className={styles.links}>SKILLS</NavLink>
                    <NavLink to="/Portfolio" className={styles.links}>PORTFOLIO</NavLink>
                </div>

            </div>

            <hr />
            <p>&#169; 2024 Landon Linn</p>
        </div>
    );
}

export default Footer;