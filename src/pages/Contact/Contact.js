import Footer from "../../components/Footer/Footer";
import styles from "./Contact.module.css";
import { useState } from "react";
import emailjs from "emailjs-com";

function Contact() {
    const [status, setStatus] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus("Sending...");
    
        emailjs
            .sendForm(
                "service_egihr2a", // EmailJS Service ID
                "default_template", // EmailJS Template ID
                e.target,
                "8hYkyWFqPa0ly9QD0" // EmailJS Public Key
            )
            .then(
                () => {
                    setStatus("Message sent! Thank you for reaching out.");
                    e.target.reset(); // Reset form fields
                },
                () => {
                    setStatus("Failed to send message. Please try again later.");
                }
            );
    };
    
    
    return (
        <div>
            <h1>CONTACT ME</h1>
            <hr />

            <div className={styles.container}>
                <div className={styles.card}>
                    <img src="/assets/Icons/phone.png" alt="Phone Icon" className={styles.icon} />
                    <a href="tel:678-772-3174" className={styles.contactLink}>678-772-3174</a>
                </div>
                <div className={`${styles.card} ${styles.middle}`}>
                    <img src="/assets/Icons/mail.png" alt="Mail Icon" className={styles.icon} />
                    <a href="mailto:landonlinn1@gmail.com" >landonlinn1@gmail.com</a>
                </div>
                <div className={styles.card}>
                    <img src="/assets/Icons/location.png" alt="Location Icon" className={styles.icon} />
                    <p>Alpharetta, GA</p>
                </div>
            </div>

            {/* Contact Form */}
            <div className={styles.contactFormContainer}>
                <form onSubmit={handleSubmit} className={styles.contactForm}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="from_name" name="from_name" required />

                    <label htmlFor="email">Your Email:</label>
                    <input type="email" id="from_email" name="from_email" required />

                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" rows="5" required></textarea>

                    <button type="submit">Send</button>
                </form>
                <p className={`${styles.status} ${status.includes("failed") ? styles.error : styles.success}`}>
                    {status}
                </p>
            </div>

            <hr />
            <Footer />
        </div>
    );
}

export default Contact;
