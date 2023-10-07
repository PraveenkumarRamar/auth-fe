import React,{useEffect,useState} from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { toast } from 'react-toastify'
import useLogout from '../hooks/useLogout'

function Dashboard() {
    let [data,setData] = useState([])
    let logout = useLogout()
    let token = sessionStorage.getItem("token")
    // console.log(token)
    let handleData = async() => {
        try {
            let res = await axios.get(`${process.env.REACT_APP_API_URL}/users/all`,{
                headers:{
                    authorization : `Bearer ${token}`
                }
            })
            if(res.status===200){
                toast.success(res.data.message)
                setData(res.data.users)
            }
            
            // console.log(res)
        } catch (error) {
            // console.log(error)
            if(error.response.status===401){
                logout()
            }
            toast.error(error.response.data.message)
        }
    }

    


useEffect(()=>{
if(token){
    handleData()
}else{
    logout()
}
},[])


    return <div className='container-fluid'>
        <div className='table-wrapper'>
            <h1 className='title'>Data's</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Password</th>
                        <th>Role</th>
                        <th>Status</th>
                        <th>CreatedAt</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((e) => {
                            return <tr key={e._id}>
                                    <td>{e.name}</td>
                                    <td>{e.email}</td>
                                    <td>{e.mobile}</td>
                                    <td>{e.password}</td>
                                    <td>{e.role}</td>
                                    <td>{e.status}</td>
                                    <td>{e.createAt}</td>
                            </tr>
                        })
                    }
                </tbody>
            </Table>
        </div>
    <Button className='button' onClick={handleData}>Refresh</Button>
    <Button className='button' onClick={logout}>Logout</Button>
    </div>


}

export default Dashboard