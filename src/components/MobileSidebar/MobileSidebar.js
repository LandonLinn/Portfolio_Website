import Nav from "../Nav/Nav";
import SocialLinks from "../SocialLinks/SocialLinks";
import styles from "./MobileSidebar.module.css";
import ProfilePicture from "../ProfilePicture/ProfilePicture";
import ResumeDownload from "../ResumeDownload/ResumeDownload";
import NameDesc from "../NameDesc/NameDesc";

function MobileSidebar({ isOpen, onClose }) {
    return (
        <div  className={`${styles.sidebarContainer} ${isOpen ? styles.open : ""}`}> 

            <div className={styles.contentContainer}>

                <button className={styles.closeButton} onClick={onClose}>
                    &times;
                </button>

                <ProfilePicture 
                    src="/assets/Headshot-colored.png" 
                    alt="Picture of Me - Landon Linn" 
                />

                <NameDesc 
                    title="Landon Linn"
                    occupation="Student at The University of Tennessee" 
                />

                <SocialLinks />

                <Nav onClose={onClose} />

                <ResumeDownload/>

            </div>
            
        </div>
    )
};

export default MobileSidebar;