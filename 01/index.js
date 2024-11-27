const express = require('express');
const Caesar = require('caesar-salad').Caesar;

const app = express()

const port = 8000



app.get('/', (req, res) => {
    return res.send(' <h1> Home page </h1>')
})
app.get('/:userMessage', (req, res) => {
    return res.send(` <h1>${req.params.userMessage}</h1>`)
})

app.get(`/encode/:password`, (req, res) => {
    const endcodeCeasar = Caesar.Cipher('b').crypt(req.params.password);
    return res.send(` <h1>Encode: ${endcodeCeasar}</h1>`)
})
app.get(`/decode/:password`, (req, res) => {
    const decodeCeasar = Caesar.Decipher('b').crypt(req.params.password)
    return res.send(` <h1>Decode: ${decodeCeasar}</h1>`)
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})