import ResumeDownload from "../../components/ResumeDownload/ResumeDownload";
import SocialLinks from "../../components/SocialLinks/SocialLinks";
import styles from "./Home.module.css";
import Footer from "../../components/Footer/Footer";

function Home ({socialLinks}) {
    const date = new Date();
    let hour = date.getHours();
    let message = "";

    if (hour >= 0 && hour < 12){
        message = "Good Morning";
    }
    else if (hour >= 12 && hour < 18) {
        message = "Good Afternoon";
    }
    else {
        message = "Good Evening";
    }

    return (
        <div>
            <h1>{`${message}, Welcome To My Website`}</h1>
            <hr/>

            <div className={styles.container}>
                <div className={styles.introSection}>
                    <h1>I'm <span>Landon Linn</span></h1>
                    <h3>Entry-Level Developer</h3>
                    <ResumeDownload />
                    <SocialLinks />
                </div>
                <div className={styles.pictureSection}> 
                    <img src="../../assets/linkedin-headshot.jpeg" alt="Profile"/>
                </div> 
            </div>
            <hr />

            <Footer />
        </div>
        
    );
}

export default Home;