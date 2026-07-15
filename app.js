
const express = require('express');
const app = express();


app.get('/crash', (req, res) => {
    console.log("Crashing now...");

    process.exit(1);
});

app.get('/', (req, res) => {
    
    res.send(`Hi i am from server running on port 8081, handled by worker ${process.env.PORT}`);
});


app.listen(process.env.PORT || 8081, () => {
    console.log(`Server is running on port ${process.env.PORT}, handled by worker ${process.pid}`);
});