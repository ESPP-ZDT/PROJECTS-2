const express = require('express');
const app = express();
const PORT = 8080;

app.listen(
    PORT,
    () => console.log(`its alive on http://localhost:${PORT}`)
);
app.use(express.json());



app.get('/tshirt', (req, res) => {
    res.status(200).send({
        tshirt: 'minion',
        size: 'large'
    })
});

app.post('/tshirt/:requestId', (req, res) => {

    const {requestId} = req.params;
    const {logo} = req.body;

    if (!logo) {
        res.status(418).send({ message: 'We need logo!'});
    }

    res.status(201).send({ tshirt: `Logo ${logo} and ID: ${requestId} added!`});
})