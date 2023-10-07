import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom';
import { API } from '../global';
function Signup() {
    let navigate = useNavigate()

    let handleSignup = async (e) => {
        e.preventDefault();

        let data = {
            name: e.target.name.value,
            email: e.target.email.value,
            mobile: e.target.mobile.value,
            password: e.target.password.value,
            role: e.target.role.value
        }
        // if (data.role === "Admin") {

        // } else {
        //     data.role = "Student"
        // }
        // console.log(data);
        try {
            let res = await axios.post(`${API}/users/signup`, data)
            if (res.status === 200) {
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
                    <Card.Title>Sign-up</Card.Title>
                    <Card.Text>
                        <Form onSubmit={handleSignup} >
                            <Form.Group className="mb-3" >
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter your name" name='name' />
                            </Form.Group>

                            <Form.Group className="mb-3" >
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" name='email' />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" >
                                <Form.Label>Mobile</Form.Label>
                                <Form.Control type="text" placeholder="Enter your ph.no" name='mobile' />
                            </Form.Group>

                            <Form.Group className="mb-3" >
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" name='password' />
                            </Form.Group>

                            <Form.Group className="mb-3" >
                                <Form.Label>Role</Form.Label>
                                <Form.Control type="text" placeholder="Role" name='role' />
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

export default Signup