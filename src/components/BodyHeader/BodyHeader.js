import { useState } from "react";
import styles from "./BodyHeader.module.css";
import MobileSidebar from "../MobileSidebar/MobileSidebar";
import { Link } from "react-router-dom";

function BodyHeader ({title, occupation, socialMedia}){

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Function to toggle menu
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

    return(
        <div className={styles.headerContainer}>
            <button
                className={styles.hamburgerButton}
                onClick={toggleMenu}
            >
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
            </button>
            
            <Link to="/">
                <img src="/assets/Personal Logo - Transparent.png" alt="Personal Logo" className={styles.logo}/>
            </Link>
            
            <div className={styles.headerDescription}>

                <div>
                    <h1 className={styles.title}>{title}</h1>
                    <p className={styles.occupation}>{occupation}</p>
                </div>
            </div>

            <MobileSidebar 
                isOpen={isMenuOpen} 
                onClose={() => setIsMenuOpen(false)} 
                title="Landon Linn"
                occupation="Student at The University of Tennessee" 
            />
        </div>
        
    );
}

export default BodyHeader;