import express from 'express';
const app = express();
app.use(express.json());
app.use(express.static('vue-app/dist'));
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});


app.get('/api/pirates/:id', (req, res) => {
    const id = req.params.id;
    const pirate = getPirate(id);
    if (!pirate) {
        res.status(404).send({ error: `Pirate ${id} not found` });
    }
    else {
        res.send({ data: pirate });
    }
})


function getPirate(id) {
    const pirates = [
        { id: 1, name: 'Klaus Störtebeker', active: '1392-1401', country: 'Germany' },
        { id: 2, name: 'Tuanku Abbas', active: 'to 1844', country: 'Malay Archipela' },
        { id: 3, name: 'Ching Shih', active: '1807-1810', country: 'China' }
    ];
    return pirates.find(p => p.id == id);
}