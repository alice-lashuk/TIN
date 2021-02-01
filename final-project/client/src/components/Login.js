import React,{S} from 'react';
import LoginForm from './Forms/LoginForm';
import {Redirect} from "react-router-dom";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {email:"", password:"", msg:"", apiResponse:""}
        this.handleInputChange = this.handleInputChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.sendData = this.sendData.bind(this);
    }
    callApi(data) {
      const request = {
        json: true,
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({formData: data})
    };

        fetch("http://localhost:9000/auth/login", request)
        .then(res => res.json())
        .then(res => {
          console.log(res);
          console.log(res.msg);
          localStorage.setItem("jwt_token", res.jwt_token);
          localStorage.setItem("isAdmin",res.isAdmin);
          return res.msg;
        })
        .then(res => this.setState({apiResponse:res}));
    }

    handleInputChange(event) {
      console.log("hi");
      event.preventDefault();
      this.setState({
              [event.target.name]: event.target.value
      });
    }


    submitForm(event) {
      event.preventDefault();
      this.sendData();
    }

    sendData() {
        const data = {email: this.state.email, password: this.state.password};
        console.log(data);
        this.callApi(data);
    }

    render() {
      let msg = "";
      console.log(this.state.apiResponse);
      if(this.state.apiResponse === "success") {
          return <Redirect to={{
              pathname: "/",
              state: { msg: "You successfully loged in"}
            }}/>
      } else {
        if(this.props.location.state) {
          msg =  this.props.location.state.msg;
      }
        return (
          <div>
            <header>
            </header>
            {msg}
            <LoginForm submit={this.submitForm} change = {this.handleInputChange}/>
          </div>
        );  
      }
  }
}

export default Login;
