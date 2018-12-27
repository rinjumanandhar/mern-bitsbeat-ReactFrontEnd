
import React from 'react'
import { Form, Input, TextArea, Button, Select } from 'semantic-ui-react'

const methodOptions = [
  { key: 1, text: 'GET', value: 'GET' },
  { key: 2, text: 'POST', value: 'POST' },
  { key: 3, text: 'DELETE', value: 'DELETE' },
  { key: 4, text: 'UPDATE', value: 'UPDATE' },
  { key: 5, text: 'GETBYID', value: 'GETBYID' },
]

const FormExampleFieldControlId = () => (
  <Form>
    <Form.Group widths='equal'>
      <Form.Field
        control={Input}
        label='Policy_Title'
        placeholder='Policy Title'
      />
      <Form.Field
        control={Select}
        options={methodOptions}
        label={{ children: 'Method', htmlFor: 'form-select-control-method' }}
        placeholder='Method'
        search
        searchInput={{ id: 'form-select-control-method' }}
      />
    </Form.Group>
    <Form.Field
      control={TextArea}
      label='Policy_description'
      placeholder='Policy Description'
    />
    <Form.Field
      control={Button}
      content='Add'
    />
  </Form>
)

export default FormExampleFieldControlId

