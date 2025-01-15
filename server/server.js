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

// Real-time communication setup
io.on('connection', (socket) => {
    console.log(`User connected: ${socket.id}`);

    // Join a specific room
    socket.on('joinRoom', ({ roomId, username }) => {
        socket.join(roomId);
        console.log(`${username} joined room: ${roomId}`);
        io.to(roomId).emit('notification', `${username} has joined the room`);
    });

    // Handle messages in a room
    socket.on('sendMessage', ({ roomId, message, username }) => {
        console.log(`Message from ${username} in room ${roomId}: ${message}`);
        io.to(roomId).emit('message', { username, message });
    });

    // Leave a room
    socket.on('leaveRoom', ({ roomId, username }) => {
        socket.leave(roomId);
        console.log(`${username} left room: ${roomId}`);
        io.to(roomId).emit('notification', `${username} has left the room`);
    });

    // Disconnect
    socket.on('disconnect', () => {
        console.log(`User disconnected: ${socket.id}`);
    });
});

const PORT = process.env.PORT || 8002;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
