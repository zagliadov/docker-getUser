import React, { useEffect, useState, useRef } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import '../MakeChanges/MakeChanges.sass';


export const AddUserForm = ({ setUsers }) => {

    let [user, setUser] = useState();

    const nameRef = useRef(''),
        usernameRef = useRef(''),
        emailRef = useRef(''),
        phoneRef = useRef(''),
        websiteRef = useRef(''),
        cityRef = useRef(''),
        streetRef = useRef(''),
        zipcodeRef = useRef(''),
        catchPhraseRef = useRef(''),
        companyNameRef = useRef(''),
        bsRef = useRef('');


    const handleChange = (e) => {
        if (nameRef != '') {
            console.log(nameRef.current.value)
        }

        setUser({
            name: nameRef.current.value || 'Data not entred',
            username: usernameRef.current.value || 'Data not entred',
            email: emailRef.current.value || 'Data not entred',
            phone: phoneRef.current.value || 'Data not entred',
            address: {
                website: websiteRef.current.value || 'Data not entred',
                city: cityRef.current.value || 'Data not entred',
                street: streetRef.current.value || 'Data not entred',
                zipcode: zipcodeRef.current.value || 'Data not entred',
            },
            company: {
                companyName: companyNameRef.current.value || 'Data not entred',
                catchPhrase: catchPhraseRef.current.value || 'Data not entred',
                bs: bsRef.current.value || 'Data not entred',

            }

        })
    }

    const addNewUser = (e) => {
        e.preventDefault()
        console.log(user)
        if (user) {
            axios.post(`http://localhost:9001/users`, { user })
                .then(response => response.data)
                .then(data => setUsers(data))
        }


    }





    return (
        <Form onSubmit={(e) => addNewUser(e)} className="makeChangesForm">
            <section className="basic">

            
            <Form.Group className="mb-1">
                <Form.Label>Name:</Form.Label>
                <Form.Control type="text" placeholder="name example"
                    onChange={(e) => handleChange(e)}
                    ref={nameRef}
                />
            </Form.Group>
            <Form.Group className="mb-1">
                <Form.Label>Username:</Form.Label>
                <Form.Control type="text" placeholder="username"
                    onChange={(e) => handleChange(e)}
                    ref={usernameRef}
                />
            </Form.Group>
            <Form.Group className="mb-1">
                <Form.Label>Email:</Form.Label>
                <Form.Control type="text" placeholder="email"
                    onChange={(e) => handleChange(e)}
                    ref={emailRef}
                />
            </Form.Group>
            <Form.Group className="mb-1">
                <Form.Label>Phone:</Form.Label>
                <Form.Control type="text" placeholder="phone"
                    onChange={(e) => handleChange(e)}
                    ref={phoneRef}
                />
            </Form.Group>
            <Form.Group className="mb-1">
                <Form.Label>Website:</Form.Label>
                <Form.Control type="text" placeholder="website"
                    onChange={(e) => handleChange(e)}
                    ref={websiteRef}
                />
            </Form.Group>
            <Button type="submit" className="changeButton">Save</Button>
            </section>
            <section className="address">

            
            <Form.Group className="mb-1">
                <Form.Label>City:</Form.Label>
                <Form.Control type="text" placeholder="City"
                    onChange={(e) => handleChange(e)}
                    ref={cityRef}
                />
            </Form.Group>
            <Form.Group className="mb-1">
                <Form.Label>Street:</Form.Label>
                <Form.Control type="text" placeholder="street"
                    onChange={(e) => handleChange(e)}
                    ref={streetRef}
                />
            </Form.Group>
            <Form.Group className="mb-1">
                <Form.Label>Zipcode:</Form.Label>
                <Form.Control type="text" placeholder="zipcode"
                    onChange={(e) => handleChange(e)}
                    ref={zipcodeRef}
                />
            </Form.Group>
            <Form.Group className="mb-1">
                <Form.Label>Bs:</Form.Label>
                <Form.Control type="text" placeholder="bs"
                    onChange={(e) => handleChange(e)}
                    ref={bsRef}
                />
            </Form.Group>
            <Form.Group className="mb-1">
                <Form.Label>Catch Phrase:</Form.Label>
                <Form.Control type="text" placeholder="catchPhrase"
                    onChange={(e) => handleChange(e)}
                    ref={catchPhraseRef}
                />
            </Form.Group>
            <Form.Group className="mb-1">
                <Form.Label>Company Name:</Form.Label>
                <Form.Control type="text" placeholder="Company Name"
                    onChange={(e) => handleChange(e)}
                    ref={companyNameRef}
                />
            </Form.Group>
            </section>
        </Form>
    )
}