import React, {Component} from 'react';
import "../css/Login.css";
import { Container, Row, Col, Input, Button, FormGroup, Label}
    from 'reactstrap';
import {withRouter} from "react-router";
import AuthHelperMethods from "./AuthHelperMethods";
import Alert from "reactstrap/es/Alert";

const Auth = new AuthHelperMethods();

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: "",
            password: "",
            loginFailed: false
        };
        this.handleChangeLogin = this.handleChangeLogin.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.isFormValid = this.isFormValid.bind(this);
        this.logIn = this.logIn.bind(this);
    }

    isFormValid() {
        return this.state.login.length > 0 && this.state.password.length > 0
    }

    render() {
        return (
            <div className='login-page'>
                <div>
                    <Container className="main-layout-page-wrapper themed-container">
                        <Col className="content" sm="12" md={{size: 6, offset: 3}}>
                            <form className='form' onSubmit={this.logIn}>
                                <FormGroup>
                                    <h2 className='nameOfPage'> Sign in </h2>
                                </FormGroup>
                                <FormGroup>
                                    <Label>Email
                                        <Input type="text" value={this.state.login} onChange={this.handleChangeLogin}/>
                                    </Label>
                                </FormGroup>
                                <FormGroup>
                                    <Label>Password
                                        <Input type="password" value={this.state.password}
                                               onChange={this.handleChangePassword}/>
                                    </Label>
                                </FormGroup>
                                <FormGroup>
                                    <Button color="success" size="lg" block disabled={!this.isFormValid()}> Submit </Button>
                                </FormGroup>

                                {this.state.loginFailed &&
                                <Alert color="danger">
                                    Incorrect username or password! Try again.
                                </Alert>}
                            </form>
                        </Col>
                    </Container>
                </div>
            </div>
        )
    }

    handleChangeLogin(e) {
        this.setState({
            login: e.target.value
        })
    }

    handleChangePassword(e) {
        this.setState({
            password: e.target.value
        })
    }

    logIn(e) {
        e.preventDefault();
        Auth.login(this.state.login, this.state.password)
            .then(res => {
                if (res === false) {
                    return alert("Sorry those credentials don't exist!");
                }
                this.props.history.push("/home");
            })
            .catch(() => {
                this.setState({loginFailed: true})
            });


    }
}
export default (withRouter(LoginPage));