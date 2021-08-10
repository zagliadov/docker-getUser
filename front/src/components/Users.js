import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { Table, Button } from "react-bootstrap";
import axios from 'axios';
import { AddUserForm } from './AddUserForm/AddUserForm';

export const Users = () => {

    const [users, setUsers] = useState();
    const [open, setOpen] = useState(false);

    useEffect(() => {
        getAllUsers()
    }, [])


    const getAllUsers = async () => {
        await axios.get(`http://localhost:9001/users`)
            .then(response => response.data)
            .then(data => setUsers(data))

    }
    const remove = (e, id) => {
        e.preventDefault()
        axios.delete(`http://localhost:9001/users/${id}`)
            .then(response => response.data)
            .then(data => setUsers(data.users))
    }

    return (
        <div className='container'>
            <Table striped bordered hover variant='dark'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users && users.map(user => {
                        return (
                            <tr key={user.id}>
                                <td className='user__id'>{user.id}
                                    <span className='littleRemove'
                                        onClick={(e) => remove(e, user.id)}>x</span>

                                </td>
                                <td>
                                    <Link to={`/users/${user.id}`} >{user.name}</Link>
                                </td>
                                <td>{user.phone || ''}</td>
                                <td>{user.email || ''}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
            {open ?
                <Button onClick={() => setOpen(!open)}>x</Button>
                : <Button onClick={() => setOpen(!open)}>Add user</Button>
            }
            {open ? <AddUserForm setUsers={setUsers} /> : null}

        </div>





    )
}
