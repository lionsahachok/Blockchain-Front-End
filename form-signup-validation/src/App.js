import React, {Component} from 'react';
import './App.css';

const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

const formValid = formErrors => {
  let valid = true;

  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  return valid;
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: null,
      lastname: null,
      email: null,
      password: null,
      formErrors: {
        firstname: "",
        lastname: "",
        email: "",
        password: ""
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state.formErrors)) {
      console.log(`
      --SUBMITTING--
      First Name: ${this.state.firstname}
      Last Name: ${this.state.lastname}
      Email: ${this.state.email}
      Pasword: ${this.state.password}
      `)
    } else {
      console.error('FORM INVALID - DISPLAY ERROR MESSAGE');
    }
  };

  handleChange = e => {
    e.preventDefault();
    const { name,value} = e.target;
    let formErrors = this.state.formErrors;

   // console.log("Name: ",name);
   // console.log("value: ",value);

    switch (name) {
      case "firstname":
        formErrors.firstname = 
        value.length < 3  
        ? "minimum 3 characters required"
        :"";
      break;
      case "lastname":
        formErrors.lastname = 
        value.length < 3  
        ? "minimum 3 characters required"
        :"";
      break;
      case "email":
        formErrors.email = 
        emailRegex.test(value)  
        ? ""
        :"Invalid email format";
      break;
      case "password":
        formErrors.password = 
        value.length < 6 
        ? "minimum 6 characters required"
        :"";
      break;
      default:
        break;
    }

    this.setState({formErrors, [name]: value }, () => console.log(this.state));
  };

  render() {
    const {formErrors} = this.state;

    return(
      <div className = "wrapper">
        <div className = "form-wrapper">
          <h1>Create account</h1>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className = "firstname">
              <lable htmlFor="firstname">First Name</lable>
              <input 
              className = {formErrors.firstname.length > 0 ? "error" : null} 
              placeholder="First Name" 
              type="text"
              name="firstname"
              noValidate
              onChange={this.handleChange}
              />
              {formErrors.firstname.length > 0 && (
                <span className = "errorMessage">{formErrors.firstname}</span>
              )}
            </div>
            <div className = "lastname">
              <lable htmlFor="lastname">Last Name</lable>
              <input 
              className = {formErrors.lastname.length > 0 ? "error" : null}
              placeholder="Last Name" 
              type="text"
              name="lastname"
              noValidate
              onChange={this.handleChange}
              />
              {formErrors.lastname.length > 0 && (
                <span className = "errorMessage">{formErrors.lastname}</span>
              )}
            </div>
            <div className = "email">
              <lable htmlFor="email">Email</lable>
              <input 
              className = {formErrors.email.length > 0 ? "error" : null}
              placeholder="email" 
              type="email"
              name="email"
              noValidate
              onChange={this.handleChange}
              />
              {formErrors.email.length > 0 && (
                <span className = "errorMessage">{formErrors.email}</span>
              )}
            </div>
            <div className = "password">
              <lable htmlFor="password">Passwords</lable>
              <input 
              type="password" 
              className= {formErrors.password.length > 0 ? "error" : null}
              placeholder="password" 
              //type="text"
              name="password"
              noValidate
              onChange={this.handleChange}
              />
              {formErrors.password.length > 0 && (
                <span className = "errorMessage">{formErrors.password}</span>
              )}
            </div>
            <div className="createAccount">
              <button type="submit">Create Account</button>
              <small>Already have an account?</small>
            </div>
          </form>
        </div>
      </div>
    );
  }
}


export default App;
