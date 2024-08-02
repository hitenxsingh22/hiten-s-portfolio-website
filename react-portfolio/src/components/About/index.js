// About/index.js
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faNodeJs, faPython, faJava, faBootstrap, faDocker, faAws } from '@fortawesome/free-brands-svg-icons';
import { faCode, faCodeBranch, faDatabase } from '@fortawesome/free-solid-svg-icons';



const About = () => {
    return (
        <>
       
        <div className='container about-page'>
            <div className='text-zone'>
                
                <h1>About Me</h1>

                <p>
                    I am currently pursuing a Bachelor's degree in Computer Science and Engineering from Dr. A.P.J. Abdul Kalam Technical University (AKTU). I am in my final year and my journey in this field has been driven by a deep curiosity and passion for technology. I am constantly exploring new tools, languages, and frameworks to expand my knowledge and stay on the cutting edge of technological advancements.
                </p>
                <p>
                    I excel in problem-solving by systematically analyzing complex issues and developing effective solutions. My adaptability allows me to quickly adjust to new technologies and methodologies, ensuring I thrive in dynamic environments. I communicate effectively with team members, stakeholders, and clients, ensuring clarity and fostering productive collaborations. My keen attention to detail ensures high-quality work, as I meticulously review every aspect to maintain accuracy and excellence. Moreover, I am dedicated to continuous learning and self-improvement, consistently seeking new knowledge and skills to stay ahead of industry trends and enhance my capabilities.
                </p>

                <ul>
                    <h2>Techstack</h2>
                    <li>Frontend - <FontAwesomeIcon icon={faReact} className="tech-icon" /> React.js, <FontAwesomeIcon icon={faNodeJs} className="tech-icon" /> Next.js, <FontAwesomeIcon icon={faHtml5} className="tech-icon" /> HTML5, <FontAwesomeIcon icon={faCss3Alt} className="tech-icon" /> CSS3, <FontAwesomeIcon icon={faBootstrap} className="tech-icon" /> Bootstrap, Tailwind CSS</li>
                    <li>Programming Languages - <FontAwesomeIcon icon={faJs} className="tech-icon" /> JavaScript,  <FontAwesomeIcon icon={faJava} className="tech-icon" /> Java, <FontAwesomeIcon icon={faCode} className="tech-icon" /> C++, <FontAwesomeIcon icon={faPython} className="tech-icon" /> Python</li>
                    <li>Backend - <FontAwesomeIcon icon={faNodeJs} className="tech-icon" /> Node.js, Express.js, PHP</li>
                    <li>Database - <FontAwesomeIcon icon={faDatabase} className="tech-icon" /> MongoDB, MySQL, PostgreSQL</li>
                    <li>DevOps - <FontAwesomeIcon icon={faDocker} className="tech-icon" /> Docker, <FontAwesomeIcon icon={faAws} className="tech-icon" /> AWS</li>
                </ul>
            </div>

            <div className="stage-cube-cont">
                <div className="cubespinner">
                    <div className="face1"><FontAwesomeIcon icon={faHtml5} color="#F06529" /></div>
                    <div className="face2"><FontAwesomeIcon icon={faCss3Alt} color="#28A4D9" /></div>
                    <div className="face3"><FontAwesomeIcon icon={faJs} color="#EFD81D" /></div>
                    <div className="face4"><FontAwesomeIcon icon={faReact} color="#5ED4F4" /></div>
                    <div className="face5"><FontAwesomeIcon icon={faNodeJs} color="#3AE113" /></div>
                    
                    <div className="face6"><FontAwesomeIcon icon={faJava} color="#007396" /></div>
                   
                    
                   
                   

                </div>
            </div>
        </div>
        {/* <Loader type="pacman" className="pacman-loader" /> */}

        </>
    );
};

export default About;
