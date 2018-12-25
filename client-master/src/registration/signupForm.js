import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Form } from 'semantic-ui-react'
import {withRouter} from 'react-router-dom';
// import RegisterUser from '../api/api';
import { NavLink } from 'react-router-dom'
import  {callApi}  from './../api/api'


const options = [
                {key:1, text: 'Admin', value:1 },
                {key:2, text: 'Authorized', value:2 },
                {key:3, text: 'General', value:3 },
            ]

const validate = (first_name, last_name, email) => {


    return{
        first_name: first_name === '',
        last_name: last_name  === '',
        email: email  === '',
        // password: password === ''
    };
}

const validatePassword = (password) => {
    let regex = "^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$";
    if ( password === '' && !regex ) {
        return 'Error'
    }else{
        return regex.test(password);
    }
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
                first_name: false,
                last_name: false,
                email: false,
                password: false
            }
        };
    }
    componentDidMount(){

    }



    handleBlur = (field) => (e) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true}
        });
    }

    
    onChange = (e) => {  
        this.setState({ [e.target.name]: e.target.value });

    }

    handleRadioChange = (e, { value }) => { 
        this.setState({ 
        salutation:value
     })
    }

    // register = (data) => {
        // return RegisterUser(data)
            // .then( window.location.assign('/login') )

        // localStorage.setItem('user', JSON.stringify(user)); )
    // }
    onSubmit = (e) => {
        console.log("submitted.......")

        // if( !this.canBeSubmitted()){
            console.log('aksjdgaksgf')
            e.preventDefault();
            // return;
            // const {first_name, last_name, email, password} = this.register(this.state.data);
            const {first_name, last_name, email, password} = this.state;

           callApi(first_name, last_name, email, password)


            // if (Object.keys(errors).length === 0){
            // this.props.history.push('/login');

            // }
            // window.location.assign("/login")

            // let { fields } = this.state;
            
        // }
       
    }


    canBeSubmitted(){
        const errors = validate(this.state.first_name, this.state.last_name, this.state.email, this.state.password);

        const isDisabled = Object.keys(errors).some(x => errors[x]);

        return !isDisabled;
    }
    
    render() {
        
        const errors = validate(this.state.email, this.state.password);
        console.log("working");
        const isDisabled = Object.keys(errors).some(x => errors[x]);

        const shouldMarkError = (field) => {
            const hasError = errors[field];
            const shouldShow = this.state.touched[field];
            return hasError ? shouldShow : false;
        };

        return (
        <Form onSubmit={this.onSubmit.bind(this)}>
            <Form.Group widths='equal'>
            <Form.Input 
                className= {shouldMarkError('first_name') ? 'error' : ''}
                fluid label='First name' 
                placeholder='First name' 
                name= 'first_name'
                type='text'
                onChange= {this.onChange}
                value= {this.state.first_name}
                onBlur= {this.handleBlur}
            />
            <Form.Input 
                className= {shouldMarkError('last_name') ? 'error' : ''}
                fluid label='Last name' 
                placeholder='Last name' 
                name= 'last_name'
                type= 'text'
                onChange= {this.onChange}
                value= {this.state.last_name}   
                onBlur= {this.handleBlur}
            />
            <Form.Select 
                fluid label='Role' 
                options={options} 
                placeholder='Role' 
                type='user_role'/>
            </Form.Group>

            <Form.Group widths='equal'>
            <Form.Input 
                className = {shouldMarkError('email') ? 'error' : ''}
                fluid label='Email' 
                placeholder='Email' 
                name= 'email'
                type='email'
                value= {this.state.email || ''}
                onChange= {this.onChange}
                onBlur= {this.handleBlur}
                /> 
            </Form.Group>

            <Form.Group widths='equal'>
            <Form.Input 
                className={shouldMarkError('password') ? "error" : ""}
                fluid label='Password' 
                placeholder='Password' 
                name= 'password' 
                type='password'
                minLength='8'
                onChange= {this.onChange}
                // value= {this.state.password || ''}
                validate= {this.validatePassword}
                onBlur= {this.handleBlur}
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
            
            <Form.Button 
            disabled={isDisabled} 
            type='submit'
            onClick= {this.onSubmit}>
             <NavLink to="/login">Register</NavLink>
             {/* <Route path="/login" component={LoginPage} />   */}
            </Form.Button>
        </Form>
        )
        // console.log('jyjghjhgdjht');
    }
}

// export default RegistrationForm;

export default withRouter(RegistrationForm);