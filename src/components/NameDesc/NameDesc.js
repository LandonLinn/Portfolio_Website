import styles from "./NameDesc.module.css";

function NameDesc ({title, occupation}) {
    return (
        <div>
            <div className={styles.description}>
                <h1>{title}</h1>
                <p>{occupation}</p>
            </div>
        </div> 
    );
}

export default NameDesc;