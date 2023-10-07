import React from 'react'
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios'
import {toast} from 'react-toastify'
import { useNavigate } from 'react-router-dom';
import { API } from '../global';
function Siginin() {
    let navigate = useNavigate()
    let handleSignin = async(e) =>{
        e.preventDefault()

        let data={
            email:e.target.email.value,
            password:e.target.password.value
        }
        try {
            let res = await axios.post(`${API}/users/signin`,data)
            // console.log(res)
            if(res.status===200){
                sessionStorage.setItem('token',res.data.token)
                toast.success(res.data.message)
                navigate('/dashboard')
            }
        } catch (error) {
            // console.log(error)
            toast.error(error.response.data.message)
            
        }
    };


    return <div className='container-fluid' >
    <div className='card-wrapper' >
        <Card className="text-center">
            <Card.Body>
                <Card.Title>Log-in</Card.Title>
                <Card.Text>
                    <Form onSubmit={handleSignin} >
                        <Form.Group className="mb-3" >
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" name='email' />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" >
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" name='password' />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Card.Text>
                <Button variant="secondary" onClick={()=>navigate('/reset-pass')} >Reset Password</Button>
            </Card.Body>          
        </Card>
    </div>
</div>
}

export default Siginin