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
            agree_terms_condition: ""
        };
    }
    
    // errors: {

    // }
    
    onChange = (e) => {
        this.setState({ first_name: e.target.value });
        this.setState({ last_name: e.target.value });
        this.setState({ email: e.target.value });
        this.setState({ password: e.target.value });
        this.setState({ salutation: e.target.value });
        this.setState({ user_role: e.target.value });
        this.setState({ first_name: e.target.value });

    }

    canBeSubmitted(){
        const { first_name, 
            last_name, 
            email, 
            password, 
        } = this.state;
        return(
        first_name.length > 0 && 
        last_name.length > 0 &&
        email.length > 0 &&
        password.length > 0 
        // salutation === true
        );
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
    };


    
    render() {
        
        const isEnabled = this.canBeSubmitted();
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
                value= {this.state.first_name}   
            />
            <Form.Select 
                fluid label='Role' 
                options={options} 
                placeholder='Role' 
                type='user_role'/>
            </Form.Group>

            <Form.Group widths='equal'>
            <Form.Input 
                fluid label='Email' 
                placeholder='Email' 
                name= 'email'
                onChange= {this.onChange}
                value= {this.state.first_name}
                /> 
            </Form.Group>

            <Form.Group widths='equal'>
            <Form.Input 
                fluid label='Password' 
                placeholder='Password' 
                name= 'password' 
                type='password'
                onChange= {this.onChange}
                value= {this.state.first_name}
                />            
            </Form.Group>

            <Form.Group  
            inline
            name="salutation">
            <label>Salutation</label>
           <Form.Radio
                label='MR.'
                value='mr'
                checked={this.value === 'mr'}
                onChange={this.onChange}
            />
            <Form.Radio
                label='MS.'
                value='ms'
                checked={this.value === 'ms'}
                onChange={this.onChange}
            />
            <Form.Radio
                label='MRS.'
                value='mrs'
                checked={this.value === 'mrs'}
                onChange={this.onChange}
            />
            </Form.Group>
            
            <Form.Checkbox 
                label='I agree to the Terms and Conditions' 
                required
            />
            
            <Form.Button disabled={!isEnabled}>Register</Form.Button>
        </Form>
        )
    }
}


export default RegistrationForm;