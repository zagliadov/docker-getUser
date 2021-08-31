require('dotenv').config();
const express = require('express'),
    cors = require('cors');
const sequelize = require('./sequelize/sequelize');
const app = express(),
    PORT = process.env.PORT || 8080;
app.use(cors());
app.use(express.json())


app.use('/api/cars', require('./routes/cars.js'));
app.use('/api/auth', require('./routes/auth.js'));
app.use('/api/users', require('./routes/users.js'));
app.use('/api/country', require('./routes/country.js'));
app.use('/api/products', require('./routes/products.js'));
app.use('/static', express.static('./controllers/upload'));

sequelize.sync().then(() => {
    app.listen(PORT, async (req, res) => {
        console.log(`Server run on ${PORT}`)
    })
})

















