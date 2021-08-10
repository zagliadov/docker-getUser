import React, { useState, useRef } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

import './MakeChanges.sass';

export const MakeChanges = ({ user, setUser }) => {

    const [info, setInfo] = useState({
        name: user.name || '',
        username: user.username || '',
        email: user.email || '',
        phone: user.phone || '',
        website: user.website || '',
        city: user.address.city || '',
        street: user.address.street || '',
        zipcode: user.address.zipcode || '',
        bs: user.company.bs || '',
        catchPhrase: user.company.catchPhrase || '',
        companyName: user.company.name || '',
    });

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
        let value = e.target.value;
        setInfo(value)
    }

    const handlerSubmit = (e) => {
        e.preventDefault();

        user = {
            id: user.id,
            name: nameRef.current.value,
            username: usernameRef.current.value,
            email: emailRef.current.value,
            phone: phoneRef.current.value,
            website: websiteRef.current.value,
            address: {
                city: cityRef.current.value,
                street: streetRef.current.value,
                zipcode: zipcodeRef.current.value,
            },
            company: {
                bs: bsRef.current.value,
                catchPhrase: catchPhraseRef.current.value,
                companyName: companyNameRef.current.value,
            }
        }

        axios.post(`http://localhost:9001/users/${user.id}`, { ...user })
            .then(response => response.data)
            .then(data => setUser(data))
    }

    return (
        <Form className='makeChangesForm'>
            <section className='basic'>
                <label className='FormElementTitle'>Basic:</label>
                <Form.Group>
                    <Form.Label>Name:</Form.Label>
                    <Form.Control type="text"
                        placeholder='Change name'
                        defaultValue={info.name}
                        ref={nameRef}
                        onChange={(e) => handleChange(e)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Username: </Form.Label>
                    <Form.Control type="text"
                        placeholder='Change Username'
                        defaultValue={info.username}
                        ref={usernameRef}
                        onChange={(e) => handleChange(e)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email: </Form.Label>
                    <Form.Control type="email"
                        placeholder='Change email'
                        defaultValue={info.email}
                        ref={emailRef}
                        onChange={(e) => handleChange(e)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Phone: </Form.Label>
                    <Form.Control type="tel"
                        placeholder='Change phone'
                        defaultValue={info.phone}
                        ref={phoneRef}
                        onChange={(e) => handleChange(e)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Website: </Form.Label>
                    <Form.Control type="text"
                        placeholder='Change website'
                        defaultValue={info.website}
                        ref={websiteRef}
                        onChange={(e) => handleChange(e)}
                    />
                </Form.Group>
                {/*****************************************************/}
                {/*****************************************************/}
                {/*****************************************************/}
                {/*****************************************************/}
                {/*****************************************************/}
                <Button className='changeButton'
                    type='submit'
                    onClick={(e) => handlerSubmit(e)}
                >
                    Save changes
                </Button>
                {/*****************************************************/}
                {/*****************************************************/}
                {/*****************************************************/}
                {/*****************************************************/}
                {/*****************************************************/}
            </section>
            <section className='address'>
                <label className='FormElementTitle'>Address:</label>
                <Form.Group>
                    <Form.Label>City: </Form.Label>
                    <Form.Control type="text"
                        placeholder='Change city'
                        defaultValue={info.city}
                        ref={cityRef}
                        onChange={(e) => handleChange(e)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Street: </Form.Label>
                    <Form.Control type="text"
                        placeholder='Change street'
                        defaultValue={info.street}
                        ref={streetRef}
                        onChange={(e) => handleChange(e)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Zipcode: </Form.Label>
                    <Form.Control type="text"
                        placeholder='Change zipcode'
                        defaultValue={info.zipcode}
                        ref={zipcodeRef}
                        onChange={(e) => handleChange(e)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Catch Phrase: </Form.Label>
                    <Form.Control type="text"
                        placeholder='Change phrase'
                        defaultValue={info.catchPhrase}
                        ref={catchPhraseRef}
                        onChange={(e) => handleChange(e)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Company name: </Form.Label>
                    <Form.Control type="text"
                        placeholder='Change name'
                        defaultValue={info.companyName}
                        ref={companyNameRef}
                        onChange={(e) => handleChange(e)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Bs: </Form.Label>
                    <Form.Control type="text"
                        placeholder='Change name'
                        defaultValue={info.bs}
                        ref={bsRef}
                        onChange={(e) => handleChange(e)}
                    />
                </Form.Group>
            </section>
        </Form>

    )
}