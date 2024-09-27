import express from 'express';

const port = 3000;
const app = express();

// Get the App
app.get('/', (req, res) => {
    res.send("Hello World");
})

// Listening the App on Port
app.listen(port, () => {
    console.log(`Server running on https://localhost$:{port}`);
})