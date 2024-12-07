import Footer from "../../components/Footer/Footer";
import styles from "./Portfolio.module.css";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Modal from "../../components/Modal/Modal";
import modalStyles from "../../components/Modal/Modal.module.css";

// Projects
const projects = [
    { 
        id: 1, 
        slug: "PersonalWebsite",
        name: "Personal Website", 
        category: "Front-End", 
        desc: "This is my personal portfolio website where I showcase the projects I’ve worked on and the skills I've developed as a Student. Built using HTML, CSS, JavaScript, and React the site is designed to be simple, clean, and easy to navigate. It includes sections for a brief overview of my background, portfolio, and a contact form for potential clients or employers. This project highlights my ability to create responsive and user-friendly websites and serves as an introduction to my work and development journey.", 
        role: "Developer", 
        url: [
            {
                behance: "https://www.behance.net/gallery/214052755/Personal-Portfolio-Website",
                github: "https://github.com/LandonLinn/Portfolio_Website/tree/master",
                preview: "https://www.landonlinn.com",
            }
        ],
        img: "../assets/PortfolioImages/portfolio-homepage.png", 
        alt: "Portfolio Website",
        keyFeatures: [
            "Responsive Design",
            "Simple, Clean Layout",
            "Contact Form",
            "Portfolio Project Filtering",
            "Social Links",
        ],
        technologiesUsed: [
            "Languages: HTML, CSS, & JavaScript",
            "Libraries: React & EmailJS",
        ],
        challengesFaced: [
            "Being my first React project, understanding how to properly organize components, pages, and assets",
            "Learning to properly use the map() and filter() to create a sorting system for the portfolio page",
            "Learning the useState was also a challenge, but was able to gain a better understanding of it using online resources",
            "Learning useNavigate and useParams for dynamic project links was challenging, particularly understanding how to extract route parameters and manage navigation without errors"
        ],
        lessonsLearned: [
            "React's useState",
            "React's map() & filter() functions",
            "Creating React components with props",
            "Gained more experience using CSS properties such as: overflow, text-overflow, positioning, object-fit, grid layouts, flex layouts, visibility, and more to improve both functionality and design",
            "Using arrays to store content that can be dynamically accessed and utilized across different components"
        ],
        outcomes: [
            "By building this project, I gained hands-on experience in structuring content, creating interactive elements, and ensuring cross-device compatibility. The project also served as an opportunity to implement best practices in UI/UX design, as I focused on delivering a simple and intuitive user experience. As a result, I now have a professional online presence that not only highlights my technical skills but also reflects my attention to detail and commitment to continuous learning."
        ],
    },
    { 
        id: 2, 
        slug: "TodoListApp",
        name: "Todo List", 
        category: "Front-End", 
        desc: "This project demonstrates my ability to create a functional and interactive to-do list application using HTML, CSS, and JavaScript. The goal was to strengthen my foundational web development skills while focusing on core concepts. The application features the ability to add, edit, and delete tasks, as well as mark them as complete. Using JavaScript and the DOM, I implemented dynamic task rendering, ensuring seamless user interaction. The minimalist design, crafted with CSS, enhances usability while maintaining a clean, user-friendly interface.", 
        role: "Developer", 
        url: [
            {
                behance: "https://www.behance.net/gallery/214200935/Todo-List-App?",
                github: "https://github.com/LandonLinn/TodoApp/tree/master",
                preview: "https://landonlinn.github.io/TodoApp/",
            }
        ],
        img: "../assets/PortfolioImages/portfolio-todoapp.png", 
        alt: "TodoApp",
        keyFeatures: [
            "Dynamic task management (add, edit, delete, and mark as complete)",
            "Minimalist design with a focus on accessibility and usability",
            "Interactive task rendering using JavaScript and DOM manipulation",
        ],
        technologiesUsed: [
            "Languages: HTML, CSS, and JavaScript",
            "Techniques: JavaScript DOM manipulation and CSS styling for interactivity",
        ],
        challengesFaced: [
            "Understanding that functions click handlers must be called before appending to the parent object",
            "Properly crafting the Todo Cards in the DOM to be able to create new cards with a function",
        ],
        lessonsLearned: [
            "Enhanced understanding of JavaScript event handling and DOM manipulation",
            "Improved foundational skills in writing clean, efficient HTML, CSS, and JavaScript code",
            "Developed a deeper appreciation for the importance of user-centric design in small-scale applications",
        ],
        outcomes: [
            "This project served as a hands-on opportunity to refine my web development fundamentals, particularly in JavaScript and DOM interaction. It also demonstrated the power of simplicity in design and how foundational tools can be used to build engaging user interfaces. Through this project, I gained confidence in my ability to create functional and interactive web applications without relying on frameworks"
        ],
    },
    // { 
    //     id: 3, 
    //     slug: "IBCTrafficWebsite",
    //     name: "IBC Traffic, Inc Website", 
    //     category: "Front-End", 
    //     desc: "I worked closely with senior management to define the business requirements for a corporate website redesign, resulting in a more intuitive user experience and a noticeable increase in both site traffic and conversions. My role involved designing dynamic website features using Figma for prototyping and implementing them on Squarespace, utilizing custom HTML, CSS, and JavaScript to enhance functionality and aesthetics. Throughout the project, I conducted continuous user testing and incorporated feedback, refining the design to ensure it met both user expectations and business goals.", 
    //     role: "Web Developer Intern", 
    //     url: [
    //         {
    //             behance: "",
    //             github: "",
    //         }
    //     ],
    //     img: "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png", 
    //     alt: "IBC Traffic Website Homepage",
    //     keyFeatures: [
    //         "User-Centered Design",
    //         "Custom Elements",
    //         "Interactive Information Cards",
    //         "Responsive Testing",
    //     ],
    //     technologiesUsed: [
    //         "Languages: HTML, CSS, & JavaScript",
    //         "Design Tools: Figma",
    //         "Platform: SquareSpace",
    //     ],
    //     challengesFaced: [
    //         "Encountered challenges with integrating custom HTML, CSS, and JavaScript on Squarespace's platform, requiring research and learning new techniques to overcome limitations and add dynamic elements",
            
    //     ],
    //     lessonsLearned: [
    //         "Utilizing transfrom and transition CSS properties in CSS to create smooth animations and interactive elements, enhancing the user experience.",
    //         "Learned the importance of maintaining clear communication with senior management to adapt the design to meet evolving business requirements and ensure project success",
    //         "Gained experience in iterative design and development, continually refining the website based on feedback and testing, ensuring a high-quality end product",
    //         "Learned to creatively work within the constraints of the Squarespace platform, leveraging custom code solutions to extend functionality without compromising design integrity",
    //     ],
    //     outcomes: [
    //         "Delivered a responsive, user-friendly website with a clean, modern design that improved user engagement and retention",
    //         " Implemented strategic user journey designs that facilitated smoother navigation and easier client conversion, contributing to higher client acquisition rates",
    //         "Delivered the project on time, meeting all business objectives, and successfully created a scalable website that will support the company’s long-term digital strategy",
    //     ],
    // },
];

function Portfolio() {

    // Setup useState
    const [selectedCategory, setSelectedCategory] = useState("All Projects");
    const [selectedProject, setSelectedProject] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Navigation
    const navigate = useNavigate();
    const { projectId } = useParams();

    // Categories
    const categories = ["All Projects", "Front-End", "Back-End", "Graphic Design", "Full-Stack"];

    // Filtering
    const filteredProjects = selectedCategory === "All Projects"
        ? projects
        : projects.filter((project) =>
              project.category.trim().toLowerCase() === selectedCategory.trim().toLowerCase()
          );

    // Modal Handlers
    const handleOpenModal = (project) => {
        navigate(`/Portfolio/${project.slug}`);
    };

    const handleCloseModal = () => {
        navigate("/Portfolio");
        setSelectedProject(null);
        setIsModalOpen(false);
    };

    // Effect to handle modal state based on URL
    useEffect(() => {
        if (projectId) {
            const project = projects.find((p) => p.slug === projectId);
            if (project) {
                setSelectedProject(project);
                setIsModalOpen(true);
            }
        } else {
            setIsModalOpen(false);
        }
    }, [projectId]);

    return (
        <div>
            <h1>MY PORTFOLIO</h1>
            <hr />
            <div className={styles.portfolioContainer}>
                <div className={styles.buttonsContainer}>
                    {categories.map((category, index) => (
                        <button
                            key={index}
                            className={styles.buttons}
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className={styles.dropdownContainer}>
                    <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                        {categories.map((category, index) => (
                            <option key={index} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>

                </div>

                <div className={styles.projectCardContainer}>
                    {filteredProjects.length === 0 ? (
                        <h2>No projects to show yet!</h2>
                    ) : (
                        filteredProjects.map((project) => (
                            <div
                                key={project.id}
                                className={styles.card}
                            >
                                <img src={project.img} alt={project.alt} />
                                <div className={styles.cardInfo}>
                                    <h3>{project.name}</h3>
                                    <p><em>{project.category}</em></p>
                                    <p className={styles.cardDesc}>{project.desc}</p>
                                </div>
                                <div>
                                    <p className={styles.link} onClick={() => handleOpenModal(project)}>See More →</p>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>

            <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                {selectedProject && (
                    <div>
                        <div className={modalStyles.modalTitle}>
                            <div>
                                <h1>{selectedProject.name}</h1>
                                <p>
                                    <em>{selectedProject.category}</em>
                                </p>
                                <hr />
                                <p><span>Description:</span> <br />{selectedProject.desc}</p>
                                <br />
                                <p><span>Role:</span> <br />{selectedProject.role}</p>
                                <br />
                                <p><span>Links to Project:</span></p>
                               {selectedProject.url.map((url, index) => (
                                    <p 
                                        key={index}
                                    >
                                        Live Preview:  
                                        <a 
                                            href={url.preview}
                                            className={styles.projectURL}  
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                        > Preview
                                        </a>

                                        <br/>

                                        Project Images: 
                                        <a 
                                            href={url.behance}
                                            className={styles.projectURL} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                        > Behance
                                        </a>

                                        <br/>

                                        Project Files:  
                                        <a 
                                            href={url.github}
                                            className={styles.projectURL}  
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                        > GitHub
                                        </a>
                                    </p>
                               ))}

                            </div>
                            <img
                                src={selectedProject.img}
                                alt={selectedProject.alt}
                            />
                        </div>
                        <hr />
                        <h2>KEY FEATURES</h2>
                        <ul>
                            {selectedProject.keyFeatures.map((feature, index) => (
                                <li key={index}>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <h2>TECHNOLOGIES USED</h2>
                        <ul>
                            {selectedProject.technologiesUsed.map((technology, index) => (
                                <li key={index}>
                                    {technology}
                                </li>
                            ))}
                        </ul>
                        <h2>CHALLENGES FACED</h2>
                        <ul>
                            {selectedProject.challengesFaced.map((challenge, index) => (
                                <li key={index}>
                                    {challenge}
                                </li>
                            ))}
                        </ul>
                        <h2>LESSONS LEARNED</h2>
                        <ul>
                            {selectedProject.lessonsLearned.map((lesson, index) => (
                                <li key={index}>
                                    {lesson}
                                </li>
                            ))}
                        </ul>
                        <h2>OUTCOME AND IMPACT</h2>
                        <ul>
                            {selectedProject.outcomes.map((outcome, index) => (
                                <li key={index}>
                                    {outcome}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </Modal>
            <hr />
            <Footer />
        </div>
    );
}

export default Portfolio;