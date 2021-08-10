import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';
import { MakeChanges } from '../MakeChanges/MakeChanges';
import './User.sass';


export const User = ({ match }) => {

    const [user, setUser] = useState();
    const [quest, setQuest] = useState(false);
    const [positive, setPositive] = useState();
    const [open, setOpen] = useState(false);


    useEffect(() => {
        getUser();

    }, [])

    const getUser = async () => {
        await axios.get(`http://localhost:9001/users/${+match.params.id}`)
            .then(response => response.data)
            .then(data => setUser(data))
    }


    const remove = (e, id) => {
        e.preventDefault()
        axios.delete(`http://localhost:9001/users/${id}`)
            .then(response => response.data)
            .then(data => console.log(data.users))
    }

    const modal = () => {
        return (
            <Modal.Dialog>
                <Modal.Header>
                    <Modal.Title>Attention</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Are you sure you want to delete the user?</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="success" onClick={() => {
                        setQuest(!quest)
                    }}>Close</Button>
                    <Button variant="danger" onClick={(e) => {
                        setPositive(true);
                        remove(e, user.id)
                    }}>Save changes</Button>
                </Modal.Footer>
            </Modal.Dialog>
        )
    }

    const showUser = (user) => {
        return (
            <div>
                <header className='header'>
                    <h2>{user.name}</h2>
                </header>
                <hr />
                <section className='info'>
                    <section className='gen_address'>
                        <div className='generalInfo'>
                            <h3>Basic information:</h3>
                            <p>Username: {user.username}</p>
                            <p>Email: {user.email}</p>
                            <p>Phone: {user.phone}</p>
                            <p>Website: <a href={user.website}>{user.website}</a></p>
                        </div>
                        <div className='address'>
                            <h3>Adress:</h3>
                            <p>City:
                            <span>
                                    {user.address.city}
                                </span>
                            </p>
                            <p>Street: {user.address.street}</p>
                            <p>Zipcode: {user.address.zipcode}</p>
                        </div>
                    </section>

                    <div className='company'>
                        <h3>Company:</h3>
                        <p>Bs: {user.company.bs}</p>
                        <p>Catch Phrase: {user.company.catchPhrase}</p>
                        <p>Name: {user.company.name}</p>
                    </div>
                </section>
                <Button variant='outline-warning' onClick={() => setQuest(!quest)}>remove</Button>
                <Button variant='outline-success' className='m-4'
                    onClick={() => setOpen(!open)}>
                    Make changes
                </Button>
                {quest ? modal() : null}
                {positive ? window.location.assign('/users') : null}
            </div>

        )
    }

    return (
        <>
            {user ? showUser(user) : null}
            {open ?
                <MakeChanges user={user} setUser={setUser} />
                : null
            }
        </>


    )
}