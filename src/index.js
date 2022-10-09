const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const taskRoutes = require('./routes/tasks.routes');

// Start
const app = express();
const port = process.env.PORT || 4000;

// Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use(taskRoutes);

// Handling Errors
app.use((err, req, res, next) => {
    return res.status(500).json({
        status: "error",
        message: err.message
    });
});

// Server
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});