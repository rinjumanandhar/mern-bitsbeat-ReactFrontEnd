import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Form } from 'semantic-ui-react'
import {withRouter} from 'react-router-dom';
// import RegisterUser from '../api/api';
import { NavLink } from 'react-router-dom'
import  {callApi}  from './../api/api'


const user_role = [
                {key:1, text: 'Superuser', value: 'superuser' },
                {key:2, text: 'Enduser', value: 'enduser' },
                {key:3, text: 'General', value: 'general' },
            ]

const validate = (first_name, last_name, email, password, salutation, user_role, agree_terms_condition) => {
    console.log('inside validate')
    console.log(user_role)

    return{
        first_name: first_name === '',
        last_name: last_name  === '',
        email: email  === '',
        password: password === '',

        salutation: salutation === '',
        user_role: user_role === '',
        agree_terms_conditions: agree_terms_condition === false
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
            agree_terms_condition: false,
            checked: false,
            canBeSubmitted: false,

            touched: {
                first_name: false,
                last_name: false,
                email: false,
                password: false,
                salutation: false,
                user_role: false,
                agree_terms_condition: false
            }
        };
    }
    componentDidMount(){
        
    }

    // checkCheckbox(form){
    //     if(form.terms.checked){

    //     }
    // }
    // onClick(e){

    // }

    toggle = () => this.setState({ checked: !this.state.checked})

    handleBlur = (field) => (e) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true}
        });
    }

    
    onChange = (e) => {  
        this.setState({ [e.target.name]: e.target.value });

    }

    handleDropDown = (e, {value}) => {
        this.setState({
            ...this.state,
            user_role: value
        })
    }

    handleRadioChange = (e, { value }) => { 
        this.setState({ 
        salutation:value
     })
    }

    onToggle = (event, data) => {
        
        this.setState({
            [data.name]:data.checked
        })
    }
    // register = (data) => {
        // return RegisterUser(data)
            // .then( window.location.assign('/login') )

        // localStorage.setItem('user', JSON.stringify(user)); )
    // }
    onSubmit = (e) => {
        e.preventDefault();

        console.log("submitted.......")

        // if( !this.canBeSubmitted()){
            console.log('aksjdgaksgf')
            // return;
            // const {first_name, last_name, email, password} = this.register(this.state.data);
            const {first_name, last_name, email, password, salutation, user_role, agree_terms_condition} = this.state;

           callApi(first_name, last_name, email, password, salutation, user_role, agree_terms_condition)


            // if (Object.keys(errors).length === 0){
            // this.props.history.push('/login');

            // }
            // window.location.assign("/login")

            // let { fields } = this.state;
            
        // }
       
    }


    canBeSubmitted(){
        const errors = validate(this.state.first_name, this.state.last_name, this.state.email, this.state.password, this.state.salutation, this.state.user_role, this.state.agree_terms_condition);
        console.log(errors, "validation error return value");
        let isDisabled = Object.keys(errors).some(x => errors[x]);

        return isDisabled;
    }
    


    render() {
        
        const errors = validate(this.state.first_name, this.state.last_name, this.state.email, this.state.password, this.state.salutation, this.state.user_role, this.state.agree_terms_condition);
        console.log("working");
        let isDisabled = Object.keys(errors).some(x => errors[x]);
        console.log("Fsdfsdf",this.state)
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
                options={user_role} 
                placeholder='Role' 
                onChange = {this.handleDropDown}
                required/>
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
                value='Mr.'
                checked={this.state.salutation === 'Mr.'}
                onClick={this.handleRadioChange}
            />
            <Form.Radio
                label='MS.'
                value='Miss'
                checked={this.state.salutation === 'Miss'}
                onClick={this.handleRadioChange}
            />
            <Form.Radio
                label='MRS.'
                value='Mrs.'
                checked={this.state.salutation === 'Mrs.'}
                onClick={this.handleRadioChange}
            />
            </Form.Group>
            
            <Form.Checkbox 
                label='I agree to the Terms and Conditions' 
                name="agree_terms_condition"
                onChange={this.onToggle}

                checked = {this.state.agree_terms_condition}
                required

            />
            
            <Form.Button 
            disabled={this.canBeSubmitted()} 
            type='submit'
            // value = 'agree_terms_condition'
            onClick= {this.onSubmit}>
             <NavLink to="/login">Register</NavLink>
             {/* <Route path="/login" component={LoginPage} />   */}
            </Form.Button>
        </Form>
        )
        // console.log('jyjghjhgdjht');
    }
}

export default RegistrationForm;

// export default withRouter(RegistrationForm);