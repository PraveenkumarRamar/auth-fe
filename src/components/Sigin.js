import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


function Sigin() {
let navigate = useNavigate()
    let handleSigin = async (e) => {
        e.preventDefault()
        // console.log(e)
        let data = {
            email: e.target.email.value,
            password: e.target.password.value,
        }
        // console.log(data)

        try {
            let res = await axios.post(`${process.env.REACT_APP_API_URL}/users/signin`, data)
            if (res.status === 200) {
                sessionStorage.setItem('token',res.data.token)
                toast.success(res.data.message)
                navigate('/dashboard')
            }
        } catch (error) {
            // console.log(error)
            toast.error(error.response.data.error || error.response.data.message)
        }

    }


    return <div className='container-fluid'>
        <h1 className='title' >Sign-in</h1>
        <div className='signup-wrapper'>
            <Form onSubmit={handleSigin} >

                <Form.Group className="mb-3" >
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" name='email' />
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
        </div>
    </div>


}

export default Sigin