import styles from "./ContactButton.module.css";
import { Link } from "react-router-dom";

function ContactButton () {
    return (
        <div>
            <Link to="/Contact">
                <button className={styles.contactButton}>Contact Me</button>
            </Link>
        </div>
    );
}

export default ContactButton;