const express = require('express');
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.json())

const port = 5000;

app.post('/', (req, res) => {
    res.json(req.body).send();
})

app.get('/sum', (req, res) => {
    const num1 = Number(req.query.first);
    const num2 = Number(req.query.second);

    res.json({sum: num1 + num2}).send();
})

app.get('/home', (req, res) => {
    res.send('OK')
})

app.get('/*', (req, res) => {
    res.send('NOTTTTT found');
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})