const express = require('express'),
    cors = require('cors'),
    {v4} = require('uuid'),
    axios = require('axios');
const app = express(),
    PORT = 9001;
app.use(cors());
app.use(express.json())

let users = [];


axios.get(`https://jsonplaceholder.typicode.com/users`)
    .then(response => users.push(...response.data))


app.get('/users', (req, res) => {
    res.status(200).json(users)
})

app.get('/users/:id', (req, res) => {
    let id = +req.params.id;
    users.forEach(user => {
        if (user.id == id) {
            res.status(200).json(user)
        }

    })

})


app.delete('/users/:id', (req, res) => {
    const id = +req.params.id;
    users = users.filter(user => user.id != id)
    res.status(200).json({ users });
})



app.post('/users/:id', (req, res) => {
    let id = +req.params.id;
    let user = users.find(user => user.id === id);
    let { name, username, email, phone, website,
        address: { city, street, zipcode },
        company: { bs, catchPhrase, companyName } } = req.body;


    user.name = name;
    user.username = username;
    user.email = email;
    user.phone = phone;
    user.website = website
    user.company = {
        name: companyName,
        bs,
        catchPhrase,
    }
    user.address = {
        city,
        street,
        zipcode,
    }
    res.send(user)
})



app.post('/users', (req, res) => {
    let user = req.body;
    let body = { id: Date.now(), ...req.body.user }
    users.push(body);
    console.log(user)
    res.status(201).json(users)
})



app.listen(PORT, (req, res) => {
    console.log(`Server run`)
})
