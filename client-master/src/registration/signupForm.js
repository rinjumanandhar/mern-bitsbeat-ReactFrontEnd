import React, { Component } from 'react'
import { Button} from 'semantic-ui-react'
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
    state = {}
    
    handleChange = (e, { value }) => this.setState({ value })
    
    render() {
        const { value } = this.state
        return (
        <Form>
            <Form.Group widths='equal'>
            <Form.Input fluid label='First name' placeholder='First name' name= 'first_name'/>
            <Form.Input fluid label='Last name' placeholder='Last name' name= 'last_name'/>
            <Form.Select fluid label='Role' options={options} placeholder='Role' />
            </Form.Group>

            <Form.Group widths='equal'>
            <Form.Input fluid label='Email' placeholder='Email' name= 'email'/> 
            </Form.Group>

            <Form.Group widths='equal'>
            <Form.Input fluid label='Password' placeholder='Email' name= 'email' type='password'/>            
            </Form.Group>

            <Form.Group inline>
            <label>Salutation</label>
           <Form.Radio
                label='MR.'
                value='mr'
                checked={value === 'mr'}
                onChange={this.handleChange}
            />
            <Form.Radio
                label='MS.'
                value='ms'
                checked={value === 'ms'}
                onChange={this.handleChange}
            />
            <Form.Radio
                label='MRS.'
                value='mrs'
                checked={value === 'mrs'}
                onChange={this.handleChange}
            />
            </Form.Group>
            
            <Form.Checkbox label='I agree to the Terms and Conditions' />
            
            <Form.Button>Submit</Form.Button>
        </Form>
        )
    }
}


export default RegistrationForm;