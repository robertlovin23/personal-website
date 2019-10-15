import React from "react"
import{Link} from 'gatsby'
import posed from 'react-pose';
import Header from '../components/header.js'
import Footer from '../components/footer.js'
import BackgroundStyles from '../components/background-image.js'
import SkillStyles from '../components/skill-background.js'
import ContactStyles from '../components/contact-image.js'
import SpaceX from '../../src/components/images/spacex.png'
import Youtube from '../../src/components/images/youtube.png'
import WilliamLovin from '../../src/components/images/weblogo.png'
import Davincis from '../../src/components/images/davincis.png'
import NatureWalk from '../../src/components/images/naturewalk.png'
import styles from './skills-css-module.module.css'
import project from'./projects-css-modules.module.css'
import Modal from 'react-modal'
import ContactForm from '../components/contact.js'
import {Col, Jumbotron, Button, Row, Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';

console.log(styles)

const Box = posed.div({
    hoverable: true,
    init:{
        scale:1,
        boxShadow: "0px 0px 0px rgba(0,0,0,0)"
    },
    hover: {
        scale: 1.1,
        boxShadow: "0px 5px 10px rgba(0,0,0,0.3)"
    }

});
const Skills = props => (
    <Col lg={4} xs={12} >
        <div className = {styles.colSpacing}>
            <div className = {styles.skillDescription}>
                <h2 className={styles.skillName}>{props.skillName}</h2>
                <p className={styles.skillParagraph}>{props.skillParagraph}</p>
                <h5 className={styles.skillTitle}>Skills I Use:</h5>
                <p className={styles.skillList}>{props.skillList}</p>
            </div>
        </div>
    </Col>
)
const Projects = props => (
    <Col md={10} xs={12} className={project.projectBoxes}>
        <Box className="box">
        <Row>
            <div className={project.projectPicture}>
                <img src={props.projectsImage} className={project.projectImage}></img>
            </div>
            <div className={project.projectSection}>
                <h2 className={project.projectTitle}>{props.projectTitle}</h2>
                <p className={project.projectDescription}>{props.projectDescription}</p>
                <h5>Project Link:</h5>
                <p className={project.projectLang}>{props.projectLink}</p>
                <h5>Stack:</h5>
                <p className={project.projectLang}>{props.projectLang}</p>
            </div>   
        </Row>  
        </Box>       
    </Col>

)

export default () => 
<Col xs={12} id="full-col">
        <Header>
        <BackgroundStyles>
            <div className="titleBox">
                    <h1 className="titleText">Hi! I'm Robert Lovin</h1>
                    <h3 className="titleText">I am a Web Developer, Problem Solver, and Adventurer</h3>
                <div className = "buttonBox">
                    <ContactForm></ContactForm>
                </div>
            </div>
        </BackgroundStyles>
            <div>
                <Col xs={8} className = "aboutContainer" id="about">
                    <div className = "aboutText">
                        <img className="profilePic" src={`data:image/jpeg;base64,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`} alt={"Profile"}></img>
                        <h1>Get to Know Me</h1>
                        <p className = "descriptionText">I love designing and building efficient and user-friendly interfaces. 
                           When I was at Oklahoma State University I started developing using C#
                           and Java to build RESTful web services and interactive mobile applications.
                           Now I design interactive websites using my JavaScript and jQuery abilities.
                           I love collaborating with developers, sharing my ideas, and learning new technologies.</p>
                    </div>
                </Col>
            </div>
        <SkillStyles>
            <div className="skillsSection" id="skills">
                <h1 className="skillTitle">Skill Set</h1>
                <Col xs={12} className = "skillColumns">
                    <Row>
                        <Skills id = "skillDesign"
                            skillName="Web Designer"
                            skillParagraph="I take user stories from clients who may not
                            have an idea of what their application should look and feel like. From there,
                            I translate these requirements into wireframes using InVision.
                            Finally, I translate these designs into webpages"
                            skillList="InVision, Trello, Slack"
                        />  
                        <Skills id = "skillDesign"
                            skillName="Front-End Development"
                            skillParagraph="After compliing my user stories and wireframes
                             together then the magic happens.I use HTML5, CSS3, and JavaScript
                             to make my designs come to life. I strive to make interactive web-pages
                             while also stressing usability and accessiblity principles so that I can include
                             users of all walks of life."
                            skillList="HTML5, CSS3, SASS, JavaScript, jQuery, ReactJS, GatsbyJS"
                        /> 
                        <Skills id = "skillDesign"
                            skillName="Back-End Development"
                            skillParagraph="I have built web and mobile applications, along with RESTful web services
                            using Ruby on Rails and Java. I built a Twitter-replica complete with user-authentication
                            and user profiles. I also have a background in developing mobile applications using the Adobe Air and Android Studio SDK's."
                            skillList="Ruby on Rails, Java, MySQL, GraphQL"
                        />                     
                    </Row>
                </Col>
            </div>
        </SkillStyles>
            <div className ="projectsContainer" id="projects">
                    <h1 className="projectTitle">Project's I've Worked On</h1>
                    <Container className="projectSpace">
                        <Projects
                            projectsImage ={WilliamLovin}
                            projectTitle="William Lovin and Associates"
                            projectDescription="A website created for a law-firm. It utilizes Bootstrap and jQuery
                                                to create interactive and visually appealing elements. More specifically 
                                                I included a Google Maps API to track where the offices of the law-firm were located
                                                and I incorporated AOS.js to create text animations. "
                            projectLink="http://www.accelerand.com"
                            projectLang="HTML5, CSS3, JavaScript, Bootstrap"
                        />
                        <Projects
                            projectsImage={Youtube}
                            projectTitle="VuePlayer"
                            projectDescription="A web application that re-creates that Youtube UI. I used the Youtube API to display a
                                                list of videos that changes depending on what a user queries. Then to display the current video, I provided an index value
                                                that changes when the user clicks on the desired video. Finally, to get a list of videos on start-up,
                                                I provided the componentDidMount function with a query string value."
                            projectLink="http://vueplayer.netlify.com"
                            projectLang="ReactJS, Material-UI, CSS3"
                        />
                        <Projects
                            projectsImage={SpaceX}
                            projectTitle="SpaceX Data"
                            projectDescription="I used the unofficial SpaceX API to come up with a list of important facts about SpaceX and it's data. Some of this data includes
                                                a list of rockets, launch sites, when the next launch is, as well as providing a filterable list of every SpaceX Launch."
                            projectLink="http://spacexwiki.netlify.com"
                            projectLang="ReactJS, Semantic-UI, CSS3"

                        />
                        <Projects
                            projectsImage={NatureWalk}
                            projectTitle="NatureWalk"
                            projectDescription="A web application I built that combines the power of the Hiking Project API and Google's Geocoding API to create a hiking search engine. 
                                                When a trail is clicked on it provides a map of where the trail
                                                is as well as some extra data, including the total elevation and trail conditions. There is also an option to tab between a list
                                                view and a map view."
                            projectLink="http://naturewalk.netlify.com"
                            projectLang="ReactJS, Semantic-UI, CSS3"
                        />
                        <Projects
                            projectsImage={Davincis}
                            projectTitle="Davinci's Food"
                            projectDescription="A web site I constructed for a restaurant in my college town. I utilized the Materialize library to enhance my CSS and to create a 
                                                mobile-friendly interface. The site also includes a menu for customers to choose their dishes before coming to the restaurant,
                                                and it also includes a contact form so that customers can send feedback to the owners.
                                                "
                            projectLink="http://www.davincisfood.com"
                            projectLang="HTML5, CSS3, JavaScript, Materialize, jQuery"

                        />
                    </Container>
            </div>
            <ContactStyles className="contactJumbo" id="contact">
                <Container className= "contactContainer">
                    <h2 className="titleText">Let's work on something together! Or catch up over Coffee!</h2>
                    <ContactForm></ContactForm>
                </Container>
            </ContactStyles>
                <Footer>
                </Footer>
        </Header>
</Col>

