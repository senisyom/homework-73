const express = require('express');
const Vigenere = require('caesar-salad').Vigenere;

const app = express()

const port = 8000

const password = 'password';

app.get('/', (req, res) => {
    return res.send(' <h1> Home page </h1>')
})
app.get('/:userMessage', (req, res) => {
    return res.send(` <h1>${req.params.userMessage}</h1>`)
})

app.get(`/encode/:password`, (req, res) => {
    const encodedPassword = Vigenere.Cipher(password).crypt(req.params.password);
    return res.send(` <h1>Encode: ${encodedPassword}</h1>`)
})
app.get(`/decode/:password`, (req, res) => {
    const decodedPassword = Vigenere.Decipher(password).crypt(req.params.password);
    return res.send(` <h1>Decode: ${decodedPassword}</h1>`)
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})