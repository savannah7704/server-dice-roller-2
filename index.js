const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

//enable CORS for testing purposes
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
})

//RESTful API endpoint for dice roll
app.get('/api/roll-dice', (req, res) => {
    const roll = Math.floor(Math.random() * 6) + 1;
    res.json({ roll });
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})