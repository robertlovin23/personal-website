import React from 'react'
import { Button, Col } from 'react-bootstrap'
import Modal from 'react-modal'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// const API_PATH = 'http://localhost:8000/src/api/contact/contact.php';

class ContactForm extends React.Component {
    constructor(){
        super();

        this.state={
            modalIsOpen: false
        }

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal(){
        this.setState({
            modalIsOpen: true
        });
    }
    closeModal() {
        this.setState({
            modalIsOpen: false
        });
    }
    /*handleSubmit = event => {
        event.preventDefault();
        console.log(this.state);
        axios({
            method: 'POST',
            url: `${API_PATH}`,
            headers: { 'content-type': 'application/json'},
            data: this.state
        }).then(response => {
            console.log("Successful Message! ", response);
            })
    };*/
    render() {
        return(
        <div>
            <Button variant="primary" onClick={this.openModal}>                       
                        <p className="btn-text">
                            Inquiries 
                        </p>                                             
            </Button>
            <div style={{textAlign: "center"}} >
                <Modal
                    className="modalClass" 
                     isOpen ={this.state.modalIsOpen}
                     onRequestClose={this.closeModal}
                     contentLabel="Example Modal"
                >
                <div style={{textAlign:"center"}}>
                    <h3 className="contact-title">Contact Me!</h3>
                </div>
                <form /*style={{width:"800", paddingTop:"100px"}} onSubmit={this.handleSubmit}*/
                     name="contact"
                     method="POST" 
                     data-netlify="true" 
                     data-netlify-honeypot="bot-field">
                <div>
                    <label>Name</label>
                </div>
                <div>
                    <input type="text" 
                           name="name"
                           placeholder="Your name..." 
                           required>
                     </input>
                </div>
                <div>
                    <label>Email</label>
                </div>
                <div>
                    <input type="text" 
                           name="email" 
                           placeholder="email@youremail.com" 
                           required>
                    </input>
            </div>
            <div>
                <label>Message</label>
            </div>
            <div>
                <textarea type="text" 
                           name="message" 
                           placeholder="Type your message..." 
                           rows="3"
                           required>
                </textarea>
            </div>
            <div style={{textAlign: "center"}}>
                <Button color="primary" type="submit">Submit</Button>
            </div>
            <div>
            <input type="hidden" name="form-name" value="contact" />
            </div>
            </form>
            </Modal>
          </div>
        </div>
            
            );
        }
    }


export default ContactForm;
