import React from 'react';
// import logo from './logo.svg';
import './App.css';
import $ from 'jquery';
import User from './model/user';
import "bootstrap/dist/css/bootstrap.css";
// import { Alert, Button, Col, Form, FormGroup, Row } from 'react-bootstrap';
import Menu from './component/Menu';


interface AppState {
  users: User[],
  currentPage: string,
}


class App extends React.Component {

  user: User;
  state: AppState;

  constructor(props: any) {
    super(props)
    this.state = {
      users: [],
      currentPage: 'enter',
    };
    this.user = {
      name: "",
      email: "",
      password: "",
    }
    this.enterButtonAction = this.enterButtonAction.bind(this);
  }

  enterButtonAction() {

    const email = $('#emailInput').val() as string;
    const user = this.getFromUsers(email);
    console.log(`enter press ${email} ${user}`);

    if (user) {
      this.setState({
        currentPage: 'login'
      });
    }
    else {
      this.setState({
        currentPage: 'register'
      });
    }

  }

  registerButtonAction() {

    const email = $('#emailInput').val() as string;
    const name = $('#nameInput').val() as string;
    const password = $('#passwordInput').val() as string;

    let usere: User = {
      name: name,
      email: email,
      password: password,
    }


    this.state.users.push(usere);
    const user = this.getFromUsers(email);

    if (user) {
      this.setState({
        currentPage: 'login'
      });
    }
    else {
      this.setState({
        currentPage: 'register'
      });
    }

  }


  getFromUsers(email: string) {
    for (const user of this.state.users) {
      if (user.email === email) {
        return user;
      }
    }
    console.log("welcome");
    return null;

  }

  render() {

    let page = <div>UNKNOW</div>;

    if (this.state.currentPage === 'enter') {
      page =

        <div className="App ">
          <Menu></Menu>
          <div className="center">
            <div className="header-text">
              <h1>
                <span className="font-weight-bold">Enter</span>
              </h1>
            </div>
            <div className="form-field">
              <div className="txt_field">
                <input type="email" id="emailInput" required />
                <span className="span_field"> </span>
                <label htmlFor="">Email address</label>
              </div>
              <div className="validation">
                <button className="btn_design" onClick={this.enterButtonAction}>Enter</button>
              </div>
            </div>
          </div>
        </div>


        ;
    } else if (this.state.currentPage === 'register') {
      page =
        <div className="App ">
          <Menu></Menu>
          <div className="container_field">
            <div className=" forms-container">
              <div className="center_1">

                <div className="header-text">
                  <h1>
                    <span className="font-weight-bold">Register</span>
                  </h1>
                </div>
                <div className="form-field">
                  <div className="txt_field">
                    <input type="email" id="emailInput" required />
                    <span className="span_field"> </span>
                    <label htmlFor="">Email address</label>
                  </div>
                  <div className="txt_field">
                    <input type="text" id="nameInput" required />
                    <span className="span_field"> </span>
                    <label htmlFor="">Name</label>
                  </div>
                  <div className="txt_field">
                    <input type="password" id="passwordInput" required />
                    <span className="span_field"> </span>
                    <label htmlFor="">password</label>
                  </div>
                  <div className="validation">
                    <button className=" btn_design" onClick={this.enterButtonAction}>Register</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        ;

    } else if (this.state.currentPage === 'login') {
      page =
        <div className="App ">
          <div className=" center">
            <Menu></Menu>
            <div className="header-text">
              <h1>
                <span className="font-weight-bold">Wasp Warehouse</span>
              </h1>
              <h2 className="text-center">Login</h2>
            </div>
            <div className="form-field">
              <div className="txt_field">
                <input type="password" id="passwordInput" required />
                <span className="span_field"> </span>
                <label htmlFor="">Password</label>
              </div>
              <div className="validation">
                <button className="btn_design" onClick={this.enterButtonAction}>Login</button>
              </div>
            </div>
          </div>
        </div>;
    } else if (this.state.currentPage === 'validate') {
      page =
        <div className="App center">
          <div className="header-text">
            <h1>
              <span className="font-weight-bold">Wasp Warehouse</span>
            </h1>
            <h2 className="text-center">Welcome</h2>
          </div>
          <div className="form-field">
            <div className="txt_field">
              <input type="password" id="passwordInput" required />
              <span className="span_field"> </span>
              <label htmlFor="">Password</label>
            </div>
            <div className="validation">
              <button className="btn_design" onClick={this.enterButtonAction}>Login</button>
            </div>
          </div>
        </div>;
    }

    return (page);
  }
}


export default App;
