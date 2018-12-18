import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Form } from 'semantic-ui-react'
// import Authentication from '../authentication/authentication'
// import { Link } from 'react-router-dom'

const options = [
                {key:1, text: 'Admin', value:1 },
                {key:2, text: 'Authorized', value:2 },
                {key:3, text: 'General', value:3 },
            ]

const validate = (email, password) => {

    return{
        email: email.length === 0,
        password: password.length === 0
    };
}
    
class RegistrationForm extends Component {
    constructor(props){
        super(props);

        this.state = {
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            salutation: "",
            user_role: "",
            agree_terms_condition: "",

            touched: {

            }
        };
    }
    
    // errors: {
    //     first_name: false,
    //     last_name: false,
    // }
    
    onChange = (e) => {  
        this.setState({ [e.target.name]: e.target.value });

    }
    handleRadioChange = (e, { value }) => { 
        this.setState({ 
        salutation:value
     })
    }


    onSubmit = (e) => {
        if( !this.canBeSubmitted()){
            e.preventDefault();
            return;
        }
        // const { first_name, 
        //     last_name, 
        //     email, 
        //     password, 
        //     salutation, 
        //     user_role} = this.state;
        //     alert('signed up with ${email}');
    }


    canBeSubmitted(){
        const errors = validate(this.state.email, this.state.password);

        const isDisabled = Object.keys(errors).some(x => errors[x]);
        // const { first_name, 
        //     last_name, 
        //     email, 
        //     password, 
        // } = this.state;
        // return(
        // first_name.length > 0 && 
        // last_name.length > 0 &&
        // email.length > 0 &&
        // password.length > 0 
        // // salutation === true
        // );

        return !isDisabled;
    }
    
    render() {
        
        // const isEnabled = this.canBeSubmitted();
        // const isEnabled = !Object.keys(errors).some(x => errors[x]);
    
        const errors = validate(this.state.email, this.state.password);
        const isDisabled = Object.keys(errors).some(x => errors[x]);

        return (
        <Form onSubmit={this.onSubmit}>
            <Form.Group widths='equal'>
            <Form.Input 
                fluid label='First name' 
                placeholder='First name' 
                name= 'first_name'
                onChange= {this.onChange}
                value= {this.state.first_name}
            />
            <Form.Input 
                fluid label='Last name' 
                placeholder='Last name' 
                name= 'last_name'
                onChange= {this.onChange}
                value= {this.state.last_name}   
            />
            <Form.Select 
                fluid label='Role' 
                options={options} 
                placeholder='Role' 
                type='user_role'/>
            </Form.Group>

            <Form.Group widths='equal'>
            <Form.Input 
                className = {errors.email ? 'error' : ''}
                fluid label='Email' 
                placeholder='Email' 
                name= 'email'
                value= {this.state.email || ''}
                onChange= {this.onChange}
                /> 
            </Form.Group>

            <Form.Group widths='equal'>
            <Form.Input 
                className={errors.password ? "error" : ""}
                fluid label='Password' 
                placeholder='Password' 
                name= 'password' 
                type='password'
                onChange= {this.onChange}
                value= {this.state.password || ''}
                />            
            </Form.Group>

            <Form.Group  
            inline
            name="salutation">
            <label>Salutation</label>
           <Form.Radio
                label='MR.'
                value='mr'
                checked={this.state.salutation === 'mr'}
                onClick={this.handleRadioChange}
            />
            <Form.Radio
                label='MS.'
                value='ms'
                checked={this.state.salutation === 'ms'}
                onClick={this.handleRadioChange}
            />
            <Form.Radio
                label='MRS.'
                value='mrs'
                checked={this.state.salutation === 'mrs'}
                onClick={this.handleRadioChange}
            />
            </Form.Group>
            
            <Form.Checkbox 
                label='I agree to the Terms and Conditions' 
                required
            />
            
            <Form.Button disabled={isDisabled}>Register</Form.Button>
        </Form>
        )
    }
}


export default RegistrationForm;