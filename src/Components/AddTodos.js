import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'

const AddTodos=(props)=>{
    const [title,setTitle]=useState('');
    const [desc,setdesc]=useState('');

    const submit=(e)=>{
     e.preventDefault();
     if(!title||!desc){
         alert('title or description cannot be bank')
         
     }
     props.addtodo(title,desc)
    }
return <div className='container'>
    <h3 className='text-center'>Add you Todos</h3>
    <Form onSubmit={submit}>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Title</Form.Label>
    <Form.Control type="text" value={title} onChange={(e)=>{
        setTitle(e.target.value)
    }} placeholder="Enter the title" />
    
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Description</Form.Label>
    <Form.Control type="text" value={desc} onChange={(e)=>{
        setdesc(e.target.value)
    }} placeholder="Enter the description" />
  </Form.Group>
  
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</div>
}

export default AddTodos
