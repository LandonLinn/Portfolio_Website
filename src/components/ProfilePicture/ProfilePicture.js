import styles from "./ProfilePicture.module.css";

function ProfilePicture ({src, alt}) {
    return (
        <div className={styles.container}>
            <img src={src} alt={alt} className={styles.profilePicture}/>
        </div>
    );
}

export default ProfilePicture;