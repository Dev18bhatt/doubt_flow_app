// index.js

const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');  // Optional: to enable Cross-Origin Resource Sharing
const connectDb = require('./config/dbConnect');  // Assuming this is your DB connection setup
const authRoutes = require('./routes/Users.js');  // Import the routes
const questionRouter = require('./routes/Questions.js');

dotenv.config();  // Load environment variables from .env file

const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json());
app.use(cors());  // Enable CORS if you need it (optional)
// Connect to the database
connectDb();

// Use the auth routes for handling authentication-related routes
app.use('/api/auth', authRoutes);  // Base path '/api/auth' for signup and other authentication routes
app.use('/api/login', authRoutes);
app.use('/api/profile', authRoutes);
app.use("/api/updateProfile", authRoutes);


// use question routes for posting question...
app.use('/api/askquestion', questionRouter);
app.use('/api/askquestion', questionRouter);
app.use('/api/askquestion', questionRouter);
// Test route to check if the server is running
app.get("/", (req, res) => {
    res.send("Hello world, the server is running.");
});

// Start the server
app.listen(5000, () => {
    console.log("Server started on port 5000");
});
