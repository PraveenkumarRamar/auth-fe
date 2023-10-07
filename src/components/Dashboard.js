import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { toast } from 'react-toastify';
import useLogout from '../hooks/useLogout'
import Button from 'react-bootstrap/Button';
import { API } from '../global';
function Dashboard() {
    let [data, setData] = useState([])
    let token = sessionStorage.getItem('token')
    let logout = useLogout()
    let handleData = async () => {
        try {
            let res = await axios.get(`${API}/users/all`, {
                headers: {
                    Authorization: `Bearer ${token}`
                },
            })
// console.log(res);
            if (res.status === 200) {
                toast.success(res.data.message)
                setData(res.data.users)
            }
        } catch (error) {
            if(error.response.status===401){
                logout()
            }
            toast.error(error.response.data.message)
            
        }
    }
    // console.log(data)
    useEffect(() => {
        if (token){
            handleData()
        }
            else{
                logout()
            }
    }, [])

    return <div className='container-fluid'>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Mobile</th>
                    <th>Role</th>
                    <th>Status</th>
                    <th>CreateAt</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((e) => {
                        return <tr key={e._id}>
                                <td>{e.name}</td>
                                <td>{e.email}</td>
                                <td>{e.password}</td>
                                <td>{e.mobile}</td>
                                <td>{e.role}</td>
                                <td>{e.status}</td>
                                <td>{e.createdAt}</td>
                        </tr>
                    })
                }
            </tbody>
        </Table>
        <Button onClick={handleData} variant="primary" type="submit">Refresh</Button>
        <Button onClick={logout} variant="danger" type="submit">Logout</Button>
    </div>
}

export default Dashboard