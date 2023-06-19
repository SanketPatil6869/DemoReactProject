import { Component } from "react";


export class RegistrationForm extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            Password: '',
            phone: '',
            email: ''
        }
    }
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    }
    validate() {

    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <input type="text" placeholder="enter name" name="name" id="name" onChange={this.handleChange}></input>
                    <br></br><br></br>
                    <input type="password" placeholder="enter password" name="password" id="pass" onChange={this.handleChange}></input>
                    <br></br><br></br>
                    <input type="phone" placeholder="enter phone" name="phone" onChange={this.handleChange}></input>
                    <br></br><br></br>
                    <input type="email" placeholder="enter email" name="email" onChange={this.handleChange}></input>
                    <br></br><br></br>
                    <input type='submit' value='register'></input>
                </form>
            </div>
        );
    }
}