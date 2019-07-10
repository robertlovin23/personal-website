import React from "react"
import {Link, graphql, useStaticQuery} from "gatsby"
import {Col, Row} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default({children}) => {
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
    <div>
        <footer>
            <Row className="footerRow">
                <Col md={6} xs={12} className="footerLeft">
                <Link to={'/'}>
                    <h4 className="titleName footerName">
                        {data.site.siteMetadata.title}
                    </h4> 
                </Link>
                </Col>
                <Col md={6} xs={12} className="footerRight">
                    <div className="socialRow">
                        <a href='https://github.com/robertlovin23'>
                            <img className="socialLogo"  src="data:image/png;base64,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"></img>
                        </a> 
                        <a href='https://www.linkedin.com/in/robert-lovin-b59115a5/' >
                            <img className="socialLogo" src="data:image/png;base64,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"></img>
                        </a>   
                    </div>
                </Col>
            </Row>
        </footer>
        {children}
    </div>
    )
}

