import React, { Component } from 'react';
//import './style.css';
import axios from 'axios'
import About from '../About';

class SignIn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }

        this.searchUser = this.searchUser.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    searchUser(e) {
        var apiBaseUrl = "http://localhost:3000/api/v1/";
        axios.post(apiBaseUrl + 'user/login', {
            email: this.state.email,
            password: this.state.password
        })
            .then(function (response) {
                console.log('res', response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    render() {
        return (
            <div className="App">
                < div className="modal-dialog" >
                    <div className="espacioPading"></div>
                    <div className="loginmodal-container">
                        <h1>REGISTRO!!!!!</h1><br></br>
                        <input type="text" name="user" id="email" placeholder="Correo" value={this.state.email} onChange={this.handleChange} />
                        <input type="password" name="pass" id="password" placeholder="Clave" value={this.state.password} onChange={this.handleChange} />
                        <input type="submit" name="login" className="login loginmodal-submit" value="Login" onClick={(event) => this.searchUser(event)} />
                        <a path="/" component={About} >
                            <input type="button" id="signIn" className="login loginmodal-submit" value="Sign in" onClick={(event) => this.handleClick(event)} />
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignIn;