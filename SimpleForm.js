import React from 'react';
import Greetings from './Greetings';
import style from './style';

const TextField = ({name, onChange, onBlur, error, label}) => (
  <div style={style.inputGroup}>
    <label>
      {label}
      <input
        style={style.input}
        type="text"
        name={name}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <div style={style.error}>{error}</div>}
    </label>
  </div>
)

class SimpleForm extends React.Component {
    state = {
      firstName: "",
      firstNameError: "",
      lastName: "",
      lastNameError: ""
    };
  
    validateName = name => {
      const regex = /[A-Za-z]{3,}/;
  
      return !regex.test(name)
        ? "The name must contain at least three letters. Numbers and special characters are not allowed."
        : "";
    };
  
    onFirstNameBlur = () => {
      const { firstName } = this.state;
  
      const firstNameError = this.validateName( firstName );
  
      return this.setState({ firstNameError });
    };
  
    onLastNameBlur = () => {
      const { lastName } = this.state;
  
      const lastNameError = this.validateName(lastName);
  
      return this.setState({ lastNameError });
    };

    onFirstNameChange = event =>
      this.setState({
        firstName: event.target.value
      });

      onLastNameChange = event =>
      this.setState({
        lastName: event.target.value
      });

      render() {
        const { firstNameError, firstName, lastName, lastNameError } = this.state;
  
        return (
          <div style={style.form}>
            <TextField name="firstName"
                       label="First name:"
                       onChange={this.onFirstNameChange}
                       onBlur={this.onFirstNameBlur}
                       error={firstNameError} />
    
            <TextField name="lastName"
                       label="Last name:"
                       onChange={this.onLastNameChange}
                       onBlur={this.onLastNameBlur}
                       error={lastNameError} />
    
            <Greetings firstName={firstName} lastName={lastName} />
          </div>
      );
    }
  }
export default SimpleForm;