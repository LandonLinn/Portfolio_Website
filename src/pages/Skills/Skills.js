import Footer from "../../components/Footer/Footer";
import styles from "./Skills.module.css";

function Skills () {
    const languages = [
        {
            name: "HTML", 
            icon: "../assets/Icons/HTML.png", 
            alt: "HTML Icon"
        },
        {
            name: "CSS", 
            icon: "../assets/Icons/CSS.png", 
            alt: "CSS Icon"
        },
        {
            name: "JavaScript", 
            icon: "../assets/Icons/JavaScript.png", 
            alt: "JavaScript Icon"
        },
        {
            name: "Python", 
            icon: "../assets/Icons/python.png", 
            alt: "Python Icon"
        }
    ];

    const frameworks = [
        {
            name: "Bootstrap", 
            icon: "../assets/Icons/Bootstrap.png", 
            alt: "Bootstrap Icon"
        },
        {
            name: "React", 
            icon: "../assets/Icons/React.png", 
            alt: "React Icon"
        },
        {
            name: "Pandas", 
            icon: "../assets/Icons/Pandas.png", 
            alt: "Pandas Icon"
        },
        {
            name: "Matplotlib", 
            icon: "../assets/Icons/Matplotlib.png", 
            alt: "Matplotlib Icon"
        }
    ];

    const databases = [
        {
            name: "SQL", 
            icon: "../assets/Icons/SQL.png", 
            alt: "SQL Icon"
        },
        {
            name: "MS Access", 
            icon: "../assets/Icons/MSAccess.png", 
            alt: "Micrsoft Access Icon"
        }
    ];

    const tools = [
        {
            name: "Git", 
            icon: "../assets/Icons/Git.png", 
            alt: "Git Icon"
        },
        {
            name: "Figma", 
            icon: "../assets/Icons/Figma.png", 
            alt: "Figma Icon"
        },
        {
            name: "MS Office", 
            icon: "../assets/Icons/MSOffice.png", 
            alt: "Microsoft Office Icon"
        },
        {
            name: "Adobe Photoshop", 
            icon: "../assets/Icons/Photoshop.png", 
            alt: "Adobe Photoshop Icon"
        }
    ];
    
    return (
        <div>
            <h1>MY SKILLS</h1>

            <hr></hr>
            <div className={styles.container}>
                <div className={styles.cardContainer}>
                    <h2 className={styles.sectionTitle}>PROGRAMMING LANGUAGES</h2>
                    <div>
                        {languages.map((lang, index) => (
                            <div key={index} className={styles.card}>
                                <img src={lang.icon} alt={lang.alt} className={styles.icon}/>
                                <p>{lang.name}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.cardContainer}>
                    <h2 className={styles.sectionTitle}>FRAMEWORKS/ LIBRARIES</h2>
                    <div>
                        {frameworks.map((lang, index) => (
                            <div key={index} className={styles.card}>
                                <img src={lang.icon} alt={lang.alt} className={styles.icon}/>
                                <p>{lang.name}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.cardContainer}>
                    <h2 className={styles.sectionTitle}>DATABASES</h2>
                    <div>
                        {databases.map((lang, index) => (
                            <div key={index} className={styles.card}>
                                <img src={lang.icon} alt={lang.alt} className={styles.icon}/>
                                <p>{lang.name}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.cardContainer}>
                    <h2 className={styles.sectionTitle}>TOOLS</h2>
                    <div>
                        {tools.map((lang, index) => (
                            <div key={index} className={styles.card}>
                                <img src={lang.icon} alt={lang.alt} className={styles.icon}/>
                                <p>{lang.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/*Certification Section*/}
            <h2>PROFESSIONAL CERTIFICATIONS</h2>
            <div className={styles.certContainer}>
                <div>
                    <div className={styles.certTitle}>
                        <img src="../assets/Icons/AWS-Cloud-Badge.png" alt="AWS Cloud Practitioner Certification Badge" />
                        <h3>AWS Cloud Practitioner Certification (Expected January 2025)</h3>
                    </div>
                    <ul>
                        <li><span>Cloud Computing Fundamentals:</span> Gained a solid understanding of cloud concepts, deployment models, and core AWS services including EC2, S3, RDS, and Lambda.</li>
                        <li><span>Security & Compliance:</span> Mastered AWS best practices, including IAM, data encryption, and compliance standards.</li>
                        <li><span>Cost Optimization:</span> Developed skills to estimate costs and implement tools like AWS Cost Explorer to manage budgets effectively.</li>
                        <li><span>Global Infrastructure:</span> Explored AWS’s global regions, availability zones, and tools for low-latency, high-availability solutions.</li>
                        <li><span>Storage & Networking:</span> Familiar with storage services (S3, EBS, Glacier) and networking basics (VPC, Load Balancers).</li>
                        <li><span>Hands-On Skills:</span> Applied practical knowledge in deploying resources, monitoring workloads, and configuring permissions.</li>
                        <li><span>Foundation for Growth:</span> Prepared for advanced AWS certifications and deeper cloud roles.</li>
                    </ul>
                </div>

                <div>
                    <div className={styles.certTitle}>
                        <img src="../assets/Icons/Google-UX-Badge.png" alt="Google UX Certification Badge" />
                        <h3>Google User Experience Design Certification (Completed September 2024)</h3>
                    </div>
                    <ul>
                        <li><span>UX Design Fundamentals:</span> Mastered the principles of user-centered design, accessibility, and usability.</li>
                        <li><span>Design Thinking Process:</span> Applied the stages of design thinking: empathize, define, ideate, prototype, and test.</li>
                        <li><span>Wireframing & Prototyping:</span> Created low- and high-fidelity wireframes and interactive prototypes using tools including Figma and Adobe XD.</li>
                        <li><span>User Research Skills:</span> Conducted user interviews, surveys, and usability testing to gather and analyze insights.</li>
                        <li><span>Visual Design Principles:</span> Learned typography, color theory, and layout strategies for effective design communication.</li>
                        <li><span>Responsive Design:</span> Designed interfaces optimized for mobile, tablet, and desktop devices.</li>
                        <li><span>Project Management:</span> Organized and iterated on UX projects using Agile methodologies and collaboration tools.</li>
                        <li><span>Portfolio Projects:</span> Completed three end-to-end UX design projects, showcasing skills in user research, prototyping, and testing.</li>
                        <li><span>Real-World Problem Solving:</span> Developed solutions for user pain points through iterative design and user feedback.</li>
                        <li><span>Career-Ready Skills:</span> Gained industry knowledge and best practices for applying UX skills in professional settings.</li>
                    </ul>
                </div>

                <div>
                    <div className={styles.certTitle}>
                        <img src="../assets/Icons/Meta-Front-End-Badge.png" alt="Meta Front-End Certification Badge" />
                        <h3>Meta Front-End Developer Professional Certificate (Expected December 2024)</h3>
                    </div>
                    <ul>
                        <li><span>Front-End Development Fundamentals:</span> Gained a solid understanding of HTML, CSS, and JavaScript for building responsive and interactive web applications.</li>
                        <li><span>Advanced JavaScript Skills:</span> Learned ES6+ syntax, DOM manipulation, and event handling to create dynamic user experiences.</li>
                        <li><span>React Expertise:</span> Built reusable components, managed state with hooks, and developed single-page applications (SPAs) using React.</li>
                        <li><span>Version Control:</span> Used Git and GitHub for collaborative development, version tracking, and deployment workflows.</li>
                        <li><span>Web Accessibility:</span> Ensured designs adhere to accessibility standards for inclusive user experiences.</li>
                        <li><span>Responsive Design:</span> Mastered CSS frameworks including Bootstrap and Flexbox/Grid layouts for mobile-friendly interfaces.</li>
                        <li><span>API Integration:</span> Worked with RESTful APIs to fetch, send, and display data dynamically in applications.</li>
                        <li><span>Testing & Debugging:</span> Applied debugging techniques and used tools including Jest to ensure application quality and reliability.</li>
                        <li><span>Portfolio Projects:</span> Completed hands-on projects, including fully functional websites and web apps, to demonstrate front-end skills.</li>
                        <li><span>Career Preparation:</span>Developed industry-ready expertise, including interviewing tips and job application strategies for front-end roles.</li>
                    </ul>
                </div>
            </div>

            <hr />
            
            <Footer />

        </div>
    );
}

export default Skills;