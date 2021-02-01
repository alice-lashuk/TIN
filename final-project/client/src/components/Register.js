import React from 'react';
import RegisterForm from './Forms/RegisterForm';
import {Redirect} from "react-router-dom";

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {email:"", password:"", name:"", surname:"", apiResponse:"", admin:""}
        this.handleInputChange = this.handleInputChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.sendUser = this.sendUser.bind(this);
        this.handleCheckBox = this.handleCheckBox.bind(this);
       
    }
    callApi(data) {
      const request = {
        json: true,
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ formData: data})
    };

        fetch("http://localhost:9000/auth/register", request)
        .then(res => res.text())
        .then(res => this.setState({apiResponse:res}));
    }

    sendUser() {
        const data = {email: this.state.email, password: this.state.password, name: this.state.name, surname: this.state.surname, admin:this.state.admin};
        this.callApi(data);
    }

    handleCheckBox(event) {
      this.setState({admin: event.target.checked});
    }
    handleInputChange(event) {
      event.preventDefault();
      this.setState({
              [event.target.name]: event.target.value
      });
    }


    submitForm(event) {
      event.preventDefault();
      this.sendUser();
    }

    render() {
        // console.log(this.state.apiResponse);
        if(this.state.apiResponse === "success") {
            return <Redirect to={{
                pathname: "/login",
                state: { msg: "You successfully registered, please login" }
              }}/>
        } else {
        return (
          <div>
            <header>
            </header>
            {this.state.apiResponse}
            <RegisterForm submit={this.submitForm} change = {this.handleInputChange} changeAdmin={this.handleCheckBox}/>
          </div>
        );  
      }
    }
}
export default Register;