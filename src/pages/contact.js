import React from 'react'
import Header from '../components/header.js'
import Footer from '../components/footer.js'
import axios from 'axios'
// import BackgroundStyles from '../components/background-image.js'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const API_PATH = 'http://localhost:8000/src/api/contact/contact.php';

class ContactForm extends React.Component {
    constructor(props){
        super(props);
        this.state={
            name: '',
            email: '',
            message: '',
        }
    }

    handleSubmit = event => {
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
    };
    render() {
        return(
            <div >
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Name</label>
                </div>
                <div>
                    <input type="text" 
                           name="name" 
                           value={this.state.name}
                           onChange={event => this.setState({name: event.target.value})} 
                           required>
                     </input>
                </div>
            <div>
                <label>Email</label>
            </div>
            <div>
                    <input type="text" 
                           name="email" 
                           value={this.state.email}
                           onChange={event => this.setState({email: event.target.value})}
                           required>
                    </input>
            </div>
            <div>
                <label>Message</label>
            </div>
            <div>
                <textarea type="text" 
                           name="message" 
                           value={this.state.message}
                           onChange={event => this.setState({message: event.target.value})}
                           required>
                </textarea>
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
            <div>
                {this.state.mailSent &&
                    <div> Thank you for contacting us</div>
                }
            </div>
            </form>
            </div>
            );
        }
    }


export default () => 
    <Header>
        <ContactForm>
            
        </ContactForm>
        <Footer>
        </Footer>
    </Header>
