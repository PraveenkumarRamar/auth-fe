import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios'
import {toast} from 'react-toastify'
import { useNavigate } from 'react-router-dom';
import { API } from '../global';
function ResetPass() {
let navigate  = useNavigate()
    let handleRespass = async(e)=>{
        e.preventDefault();
        let data = {
            email:e.target.email.value,
            current_password : e.target.C_password.value,
            new_password : e.target.N_password.value
        }

        try {
            let res = await axios.put(`${API}/user/change-pass`,data)
            console.log(res)
            if(res.status===200){
                toast.success(res.data.message)
                navigate('/home-page')
            }
        } catch (error) {
            // console.log(error)
            toast.error(error.response.data.message)

        }
    }

    return <div className='container-fluid' >
        <div className='card-wrapper' >
            <Card className="text-center">
                <Card.Body>
                    <Card.Title>Reset-Password</Card.Title>
                    <Card.Text>
                        <Form onSubmit={handleRespass} >

                            <Form.Group className="mb-3" >
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" name='email' />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>


                            <Form.Group className="mb-3" >
                                <Form.Label>Current_Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" name='C_password' />
                            </Form.Group>


                            <Form.Group className="mb-3" >
                                <Form.Label>New_Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" name='N_password' />
                            </Form.Group>


                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    </div>
}

export default ResetPass