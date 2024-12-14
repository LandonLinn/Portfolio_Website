import styles from "./NameDesc.module.css";
import { Link } from "react-router-dom";

function NameDesc ({title, occupation}) {
    return (
        <div className={styles.container}>

            <Link to="/">
                <img src="/assets/Personal Logo - Transparent.png" alt="Personal Logo" className={styles.logo}/>
            </Link>

            <div className={styles.description}>
                <h1>{title}</h1>
                <p>{occupation}</p>
            </div>
        </div> 
    );
}

export default NameDesc;