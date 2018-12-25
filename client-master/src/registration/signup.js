// import React, { Component } from 'react'
// import { Button,/ Checkbox, Dropdown } from 'semantic-ui-react'
// import 'semantic-ui-css/semantic.min.css'
// import Authentication from '../authentication/authentication'
// import { Link } from 'react-router-dom'
// import RegistrationForm from './signupForm'


// const login = (RegistrationForm) => {
//     return dispatch => doLogin(RegistrationForm)
//         .then(() => dispatch({ type: 'LOGGED_IN'}))
//         .catch(() => dispatch({ type: 'LOGIN_FAILED'}))
// }

// const initialState = {
//     loggedIn: false,
//     shouldRedirect: false,
//     errorMessage: null
// }

// const application = (state= initialState, action)=>{
//     switch action.type (
//         case 'LOGGED_IN':
//             return Object.assign({}, state, {loggedIn: true, shouldRedirect: true})
//         case 'LOGIN_FAILED':
//             return Object.assign({}, state, {loggedIn: false, shouldRedirect: false, errorMessage: action.error.message})
//     )
//     return state
// }

// @connect(state => {application: state.application})

// class Login extends Component {
//     componentWillUpdate() {
//         const {router} = this.context
//         const {application} = this.props
//         if( application.shouldRedirect )
//             router.transition(...)
//     }

//     onSubmit(){
//         const actions = bindActionCreators(applicationActions, dispatch)
//         actions.login({...})
//     }

//     render(){
//         const {errorMessage}= this.props
//         return(
//             <div>
//                 {errorMessage ? <p>{errorMessage}</p> : null}
//                 <form onSubmit={this.onSubmit}>
//                  <div className='form-group'>
//                  <label>First Name: </label>                  
//                  <input 
//                     placeholder= 'First Name' 
//                     type = 'text'
//                     name= 'first_name' 
//                     onChange= {this.onChange}
//                     value= {this.state.fields.first_name}
//                 />
//                 {this.state.errors.first_name && this.state.errors.first_name}
//                 </div>
//                 <br/> 
//                 <div className='form-group'>
//                     <label>Last Name: </label>
//                     <input 
//                         placeholder= 'Last Name' 
//                         type = 'text'   
//                         name= 'last_name'
//                         onChange= {this.onChange}
//                         value= {this.state.fields.last_name}
//                     />
//                 </div>  
//                 <br/>                     
//                 <div className='form-group'>
//                     <label>Email: </label>
//                     <input 
//                         placeholder= 'Email' 
//                         name= 'email' 
//                         type= 'email'
//                         onChange= {this.onChange}
//                         value= {this.state.fields.email}
//                     />
//                 </div> 
//                 <br/>                 
//                 <div className='form-group'>
//                     <label>Password: </label>
//                     <input 
//                         placeholder= 'Password' 
//                         type= 'password'
//                         name= 'password'  
//                         minLength= '8' 
//                         onChange= {this.onChange}
//                         value= {this.state.fields.password}
//                         required
//                     />
//                 </div>
//                 <br/>     
//                 <div>
//                     <Dropdown 
//                         placeholder='User Role'
//                         clearable options= {options} selection
//                     />  
//                 </div>
//                 <br/>               
//                 <div>
//                     <Checkbox label='Mr. '/>
//                     <Checkbox label='Ms. '/>
//                     <Checkbox label='Mrs. '/>
//                 </div> 
//                 <br/>                        
//                 <div>
//                     <Checkbox 
//                         label='I agree to the terms and conditions' 
//                         required />
//                 </div>     
//                 <br/> 
//                 {Authentication.isUserAuthenticated() ? (
//                 <div>
//                     <Link to= "/login">
//                     <Button type='submit'>Register</Button>
//                     </Link>
//                 </div>
//                 ) : (
//                     <div>
                        
//                         <Button type='submit'>Register</Button>
                       
//                     </div>
//                 )}
//                 <br/>
                
//             </form>   
//             </div>
//         )
//     }
// }

// export default Login;

// class RegistrationForm extends Component{
//     constructor(props) {
//         super(props);

//         this.state = {
//             fields: {},
//             errors: {},
//         };

//         this.onChange = this.onChange.bind(this);
//         // this.onSubmit = this.onChange.bind(this);
//     };

//     onChange = (e) => {
        
//         let fields = this.state.fields;
//         fields[e.target.name] = e.target.value;
//         this.setState({
//             fields
//         },()=>console.log(this.state.fields));
//     }

//     onSubmit = (e) => {
//         e.preventDefault();
//         if(this.validateForm()) {
//             let fields = {};
//             fields.first_name = "";
//             fields.last_name = "";
//             fields.email = "";
//             fields.password = "";
//             fields.salutation = "";
//             fields.user_role = "";
//             fields.agree_terms_condition = "";

            
//             this.setState({ fields: fields });
//             alert( 'Form Submitted' );
//         }
//     }

//     validateForm() {
        
//         let fields = this.state.fields;
//         let errors = {};
//         let formIsValid = true;

//         if( !fields.first_name){
//             formIsValid = false;
//             errors.first_name = "Field cannot be empty";
//         }
        
//         if( typeof fields.first_name !== 'undefined' ){
//             if( !fields.first_name.match(/^[a-zA-Z ]*$/)){
//                 formIsValid = false;
//                 errors.first_name = "Field can be alphabet only";
//             }
//         }

//         if( !fields.last_name){
//             formIsValid = false;
//             errors.last_name = "Field cannot be empty";
//         }

//         if( typeof fields.last_name !== 'undefined' ){
//             if( !fields.last_name.match(/^[a-zA-Z ]*$/)){
//                 formIsValid = false;
//                 errors.last_name = "Field can be alphabet only";
//             }
//         }

//         if( !fields.email){
//             formIsValid = false;
//             errors.email = 'Field cannot be empty';
//         }

//         if( typeof fields.email !== 'undefined'){
//             let pattern = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)
//             if(!pattern.test( fields.email )){
//                 formIsValid = false;
//                 errors.email = 'Enter valid email format'
//             }
//         }

//         if( !fields.password ){
//             formIsValid = false;
//             errors.password = 'Field cannot be empty';
//         }

//         if( typeof fields.password !== 'undefined'){
//             let pattern = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$/)
//             if(!pattern.test( fields.password )){
//                 formIsValid = false;
//                 errors.password = 'Password must be at least 4 characters, no more than 8 characters, and must include at least one upper case letter, one lower case letter, and one numeric digit.'
//             }
//         }

//         this.setState({
//             errors: errors
//         });
//         console.log(formIsValid)
//         return formIsValid;

//     }

    

//     render(){

//         const options = [
//             {key:1, text: 'Admin', value:1 },
//             {key:2, text: 'Authorized', value:2 },
//             {key:3, text: 'General', value:3 },
//         ]


//         return(
            
//             <form onSubmit={this.onSubmit}>
//                 <div className='form-group'>
//                 <label>First Name: </label>                  
//                 <input 
//                     placeholder= 'First Name' 
//                     type = 'text'
//                     name= 'first_name' 
//                     onChange= {this.onChange}
//                     value= {this.state.fields.first_name}
//                 />
//                 {this.state.errors.first_name && this.state.errors.first_name}
//                 </div>
//                 <br/> 
//                 <div className='form-group'>
//                     <label>Last Name: </label>
//                     <input 
//                         placeholder= 'Last Name' 
//                         type = 'text'   
//                         name= 'last_name'
//                         onChange= {this.onChange}
//                         value= {this.state.fields.last_name}
//                     />
//                 </div>  
//                 <br/>                     
//                 <div className='form-group'>
//                     <label>Email: </label>
//                     <input 
//                         placeholder= 'Email' 
//                         name= 'email' 
//                         type= 'email'
//                         onChange= {this.onChange}
//                         value= {this.state.fields.email}
//                     />
//                 </div> 
//                 <br/>                 
//                 <div className='form-group'>
//                     <label>Password: </label>
//                     <input 
//                         placeholder= 'Password' 
//                         type= 'password'
//                         name= 'password'  
//                         minLength= '8' 
//                         onChange= {this.onChange}
//                         value= {this.state.fields.password}
//                         required
//                     />
//                 </div>
//                 <br/>     
//                 <div>
//                     <Dropdown 
//                         placeholder='User Role'
//                         clearable options= {options} selection
//                     />  
//                 </div>
//                 <br/>               
//                 <div>
//                     <Checkbox label='Mr. '/>
//                     <Checkbox label='Ms. '/>
//                     <Checkbox label='Mrs. '/>
//                 </div> 
//                 <br/>                        
//                 <div>
//                     <Checkbox 
//                         label='I agree to the terms and conditions' 
//                         required />
//                 </div>     
//                 <br/> 
//                 {Authentication.isUserAuthenticated() ? (
//                 <div>
//                     <Link to= "/login">
//                     <Button type='submit'>Register</Button>
//                     </Link>
//                 </div>
//                 ) : (
//                     <div>
                        
//                         <Button type='submit'>Register</Button>
                       
//                     </div>
//                 )}
//                 <br/>
                
//             </form>   
           
//         )
//     }
// }


// export default RegistrationForm;

