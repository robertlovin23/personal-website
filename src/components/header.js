import React from "react"
import {useStaticQuery, Link, graphql } from "gatsby"
import {Navbar, Col, Nav} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default ({children}) => {
    const data = useStaticQuery(
    graphql`
        query{
            site{
                siteMetadata{
                    title
            }
        }
    }
`
)
return(
<Col xs={12} id="full-col">
    <Navbar collapseOnSelect expand="md" bg='dark' fixed='top'>
        <Navbar.Brand >
            <Link to={'/'}>
                <h4 className="titleName">{data.site.siteMetadata.title}</h4>
            </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto" activeKey="/home">
            {/* <ul className="linkSet"> */}
            <Nav.Link href={"#home"} className="linkList">
                Home{/* <li className = "linkList">About</li> */}
            </Nav.Link>
            <Nav.Link href={"#about"} className="linkList">
                About{/* <li className = "linkList">Skills</li> */}
            </Nav.Link>        
            <Nav.Link href={'#skills'} className="linkList">    
                Skills{/* <li className = "linkList">Projects</li> */}
            </Nav.Link>
            <Nav.Link href={"#projects"} className="linkList">   
                Projects{/* <li className = "linkList">Contact</li> */}
            </Nav.Link>
            {/* </ul> */}
        </Nav>
        </Navbar.Collapse>
    </Navbar>
    {children}
</Col>
)
}
