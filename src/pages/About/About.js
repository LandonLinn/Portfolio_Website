import Footer from "../../components/Footer/Footer";


function About () {
    return (
        <div>
            <div>
                <h1>ABOUT ME</h1>
            </div>

            <hr/>

            <div>
                <h2>PERSONAL INFO</h2>
                <p><span>Name:</span> Landon Linn</p>
                <p><span>Age:</span> 22</p>
                <p><span>College:</span> The University of Tennessee</p>
                <p><span>Major: </span> Information Science</p>
                <p><span>Concentration: </span> User Experience Design</p>
                <p><span>Major GPA: </span> 3.56/4.00</p>
                <p><span>Graduation Year: </span> 2025</p>
                <p><span>Location: </span> Alpharetta, GA</p>

                <h2>SUMMARY STATEMENT</h2>
                <p>Information Science student, graduating in May 2025, specializing in UX Design. 
                    Proficient in Python, SQL, C++, HTML, CSS, and JavaScript, with practical experience in full-stack development. 
                    Looking to leverage technical expertise and a strong understanding of user-centered design in an entry-level role as a 
                    Software Engineer, Front-End Developer, UX Developer, or similar position. Committed to delivering innovative, 
                    efficient, and scalable solutions.</p>

                <h2>RELEVANT EXPERIENCE</h2>
                <h3>Web Developer with IBC Traffic, Remote,  May 2024 - Current</h3>
                <em>Internship</em>
                <ul>
                    <li>Collaborated with senior management to capture business requirements for the redesign of the corporate website,
                    leading to improved user experience and a measurable increase in traffic and conversions.</li>
                    <li>Designed and deployed dynamic website features using Figma for prototyping, Squarespace for hosting, and custom
                    HTML, CSS, and JavaScript, improving site functionality and aesthetics.</li>
                    <li>Conducted iterative user testing and feedback sessions, refining the site based on insights, resulting in a more
                    intuitive and satisfying user experience.</li>
                </ul>

                <h2>RELEVANT COURSEWORK</h2>
                <h3>Database Design - UTK Course</h3>
                <ul>
                    <li>Studied procedures and techniques in database design and development, including conceptual data modeling,
                    logical database design, and the physical database design process.</li>
                    <li>Gained proficiency in Structured Query Language (SQL) for querying and managing relational databases.</li>
                </ul>
                <h3>Programming for Information Applications - UTK Course</h3>
                <ul>
                    <li>Focused on programming languages with an emphasis on data structures, built-in functions, user-defined variables,
                    and syntax control structures for processing and visualizing datasets.</li>
                </ul>
                <h3>User Experience Design - UTK Courses & Google UXD Certification</h3>
                <ul>
                    <li>Developed user-centered design skills, including user research, persona creation, wireframing, and prototyping.</li>
                    <li>Acquired expertise in usability testing and iterative design to enhance product functionality and user satisfaction.</li>
                    <li>Proficient in design tools such as Figma and Adobe XD for creating high-fidelity prototypes.</li>
                    <li>Applied accessibility principles to ensure inclusive and user-friendly designs for diverse users.</li>
                </ul>
                <h3>Interfaces and Interaction Design - UTK Course</h3>
                <ul>
                    <li>Explored human-computer interaction (HCI) principles to design intuitive and effective user interfaces</li>
                </ul>

                <h2>PROFESSIONAL CERTIFICATIONS</h2>
                <ul>
                    <li>AWS Cloud Practitioner Certification (Expected September 2024)</li>
                    <li>Google User Experience Design Certification (Completed September 2024)</li>
                    <li>Meta Front-End Developer Professional Certificate (Expected January 2025)</li>
                </ul>

                <h2>PROFESSIONAL AFFILIATIONS</h2>
                <ul>
                    <li>United States Research Software Engineer Association (US-RSE) August 2024 - Present</li>
                    <li>Association for Computing Machinery (ACM) September 2024 - Present</li>
                    <li>International Institute of Business Analysis (IIBA) August 2024 - Present</li>
                </ul>
            </div>

            <hr />

            <Footer/>
        </div>
    );
}

export default About;