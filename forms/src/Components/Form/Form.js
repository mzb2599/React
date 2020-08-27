import React from 'react';
import './style.css'

class Form extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      Username: '',
      Email: '',
      Password: '',
      Gender: '',
      Phone:''
    }  
  }
  HandleNameChange = (event) => {
      this.setState({
        Username: event.target.value
        })
  }
  HandleEmailChange = (event) => {
    this.setState({
      Email: event.target.value
    })
  }
  HandlePhoneChange = (event) => {
    this.setState({
      Phone: event.target.value
    })
  }

  HandleGenderChange = (event) => {
    this.setState({
      Gender: event.target.value
    })
  }
  HandlePasswordChange = (event) => {
    this.setState({
      Password: event.target.value
    })
  }
  OnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  OnSubmit = () => {

    if (this.state.Phone === "" || this.state.Phone.length !== 10){
      window.alert("Invalid Phone Number")
      return;
    }
    window.alert(`
      Name: ${this.state.Username}
      Email: ${this.state.Email}
      Phone no. :${this.state.Phone}
      Gender: ${this.state.Gender}
      Password: ${this.state.Password}
    `);
    this.ClearFormFields();
  }
  ClearFormFields=()=> {
    this.setState =({
      Username: '',
      Email: '',
      Password: '',
      Gender: '',
      Phone: ''
    })
  }
    render = () => {
        return (
          <div className="form-container">
            <p className='title'>---User Form---</p>
            <input
              type="text"
              placeholder="Enter your name"
              className="input-style"
              onChange={this.HandleNameChange}
              value={this.state.Username}
            />
            <input
              type="email"
              placeholder="Enter your email"
              className="input-style"
              onChange={this.HandleEmailChange}
              value={this.state.Email}

            />
            <input
              type="text"
              placeholder="Enter your phone number"
              className="input-style"
              onChange={this.HandlePhoneChange}
              value={this.state.Phone}

            />
            <select className="input-style" onChange={this.HandleGenderChange} value={this.state.Gender}
>
              <option>Male</option>
              <option>Female</option>
            </select>
            <input
              type="password"
              placeholder="Enter your  password"
              className="input-style"
              onChange={this.HandlePasswordChange}
              value={this.state.Password}
            />
            <button type="submit" className='submit-btn' onClick={this.OnSubmit} >submit</button>
          </div>
        );
    }
}
export default Form