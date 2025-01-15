const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Server } = require('socket.io');
const authRoutes = require('./routes/auth');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: { origin: "*" }
});

app.use(cors());
app.use(bodyParser.json());
app.use('/api/auth', authRoutes);


////////////////  REAL TIME SETUP ////////////////////
io.on('connection', (socket) => {
    console.log(`User connected: ${socket.id}`);
    socket.on('message', (data) => {
        io.emit('message', data);
    });
    socket.on('disconnect', () => {
        console.log(`User disconnected: ${socket.id}`);
    });
});

const PORT = process.env.PORT || 9002;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
