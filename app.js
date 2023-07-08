require('dotenv').config();
require('express-async-errors');

const express = require('express');
const app = express();

// connect database
const connectDB = require('./src/db/database');
const authenticateUser = require('./src/middleware/authentication');
// routers

const authRouter = require('./src/routes/auth');
const jobsRouter = require('./src/routes/jobs');

// error handlers

const notFoundMiddleware = require('./src/middleware/not-found');
const errorHandlerMiddleware = require('./src/middleware/error-handler');

// routes

app.use('/api/auth', authRouter);
app.use('/api/jobs', authenticateUser, jobsRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => {
            console.log(`Server listening on port ${port}...`);
        });
    } catch (error) {
        console.log(error);
    }
};

start();