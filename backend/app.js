const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());

const products = require('./product')

app.get('/products', (req, res) => {
    res.send(products);
})

app.listen(5000);