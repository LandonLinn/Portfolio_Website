import styles from "./ResumeDownload.module.css";

function ResumeDownload () {
    function handleDownload (){
        const link = document.createElement('a');
        link.href="../assets/2025 Landon Linn Resume.pdf";
        link.download="Landon_Linn_Resume_2025.pdf";
        link.click();
    }
    
    return (
        <div>
            <button onClick={handleDownload} className={styles.downloadButton}>
                Download My Resume
            </button>
        </div>
    );
}

export default ResumeDownload;