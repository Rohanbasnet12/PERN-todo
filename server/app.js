import express from 'express';
import env from 'dotenv';
import bodyParser from 'body-parser';
import pg from 'pg';
import cors from 'cors';

const port = process.env.PORT ?? 3000;
const app = express();
env.config(); // Setting up the environmental configuration
app.use(cors()); // Using cors to establish connection between frontend and backend
app.use(express.json());


// Setting up the PostgreSQL database
const db = new pg.Client({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT,
});
db.connect();

// Setting up the middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Get the App
app.get('/', (req, res) => {
    res.send('Hello World');
});

// Get all the todos
app.get('/todos/:userEmail', async (req, res) => {
    // Access the userEmail parameter from the route
    const { userEmail } = req.params;

    try {
        // Query the database for todos associated with the userEmail
        const todos = await db.query('SELECT * FROM todos WHERE user_email = $1', [userEmail]);
        res.json(todos.rows); // Send the fetched todos as a response
    } catch (err) {
        console.log(err); // Log any errors
        res.status(500).send('Server error'); // Send a 500 status response on error
    }
});

// Add todo
app.post('/todos', (req, res) => {
    const { user_email, title, progress, date } = req.body
    try {
        db.query('INSERT INTO todos(user_email, title, progress, date) ($1, $2, $3, $4)'
            , [user_email, title, progress, date])
    } catch (err) {
        console.error(err);
    }
})

// Listening to the App on Port
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
