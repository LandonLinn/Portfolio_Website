import Nav from "../Nav/Nav";
import SocialLinks from "../SocialLinks/SocialLinks";
import styles from "./Sidebar.module.css";
import ProfilePicture from "../ProfilePicture/ProfilePicture";
import ResumeDownload from "../ResumeDownload/ResumeDownload";
import NameDesc from "../NameDesc/NameDesc";

function Sidebar({ title, occupation }) {

    return (
        <div className={styles.sidebarContainer}> 

            <ProfilePicture 
                src="./assets/Headshot-colored.png" 
                alt="Picture of Me - Landon Linn" 
            />

            <NameDesc 
                title="Landon Linn"
                occupation="Student at The University of Tennessee" 
            />

            <SocialLinks />

            <Nav />

            <ResumeDownload/>
            
        </div>
    )
};

export default Sidebar;