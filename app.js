
const express = require('express');
const app = express();
const packageJson = require('./package.json');


app.get('/crash', (req, res) => {
    console.log("Crashing now...");

    process.exit(1);
});

app.get('/', (req, res) => {
    
    res.send(`Hi i am from server running on port 8081, handled by worker ${process.env.PORT}`);
});

app.get('/version', (req, res) => {
    res.json({
        version: packageJson.version,
        name: packageJson.name
    });
});


app.listen(8081,'0.0.0.0', () => {
    console.log(`Server is running on port ${process.env.PORT}, handled by worker ${process.pid}`);
});
