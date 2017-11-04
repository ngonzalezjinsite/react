import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import './style.css';
import axios from 'axios'
import Sign from '../SignIn';


const SignIn = () => (
    <div>
        <h2>Registro</h2>
        <Sign />
    </div>
)


class Login extends Component {
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
        const { className, ...props } = this.props;
        return (
            <div className="App">
                < div className="modal-dialog" >
                    <div className="espacioPading"></div>
                    <div className="loginmodal-container">
                        <h1>React</h1><br></br>
                        <input type="text" name="user" id="email" placeholder="Correo" value={this.state.email} onChange={this.handleChange} />
                        <input type="password" name="pass" id="password" placeholder="Clave" value={this.state.password} onChange={this.handleChange} />
                        <input type="submit" name="login" className="login loginmodal-submit" value="Login" onClick={(event) => this.searchUser(event)} />
                        <Link to="/sign-in">
                            <input type="button" id="signIn" className="login loginmodal-submit" value="Sign in" />
                        </Link>
                        <Route path="/sign-in" component={SignIn} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;