import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Table, Button, Form } from 'react-bootstrap';
import "../../styles/User.css";


function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getAllUsers();
    }, []);
    
    const getAllUsers = async () => {
        try {
            const { data } = await axios.get("http://localhost:5000/api/v1/auth/get-user");
            console.log("Fetched users data:", data); // Check the fetched data
            setUsers(Array.isArray(data) ? data : []);
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };

    const handleStatusChange = async (id, newStatus) => {
        try {
            const { data } = await axios.patch(`http://localhost:5000/api/v1/auth/update-status/${id}`, { status: newStatus });
            setUsers(users.map(user => user._id === id ? data : user));
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Container>
            <h1 className='text-center my-4'>All Users List</h1>
            <Table striped bordered hover responsive>
                <thead className="thead-dark">
                    <tr>
                        <th className='text-center'>No.</th>
                        <th>First Name</th>
                        <th>Address</th>
                        <th>Aadhaar</th>
                        <th>PAN</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users?.map((u, index) => (
                        <tr key={u._id}>
                            <th scope="row" className='text-center'>{index + 1}</th>
                            <td>{u.firstname}</td>
                            <td>{u.address}</td>
                            <td>{u.aadhaar}</td>
                            <td>{u.pan}</td>
                            <td>{u.email}</td>
                            <td>{u.mobile}</td>
                            <td className={u.status === 'active' ? 'text-primary' : 'text-danger'}>{u.status}</td>
                            <td>
                                <Form.Control
                                    as="select"
                                    value={u.status}
                                    onChange={(e) => handleStatusChange(u._id, e.target.value)}
                                    className={u.status === 'active' ? 'btn-primary' : 'btn-danger'}
                                >
                                    <option value="active">Active</option>
                                    <option value="inactive">Inactive</option>
                                </Form.Control>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    )
}

export default Users;
