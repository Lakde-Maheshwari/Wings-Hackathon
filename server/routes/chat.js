const express = require('express');
const room = require('../models/room');
const message = require('../models/message');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

// Create a new room
router.post('/createRoom', protect, async (req, res) => {
    const { name, participants } = req.body;
    try {
        const room = await Room.create({ name, participants });
        res.status(201).json(room);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get all messages in a room
router.get('/roomMessages/:roomId', protect, async (req, res) => {
    const { roomId } = req.params;
    try {
        const messages = await Message.find({ room: roomId }).populate('sender', 'name');
        res.json(messages);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Send a message (for logging purposes)
router.post('/sendMessage', protect, async (req, res) => {
    const { roomId, senderId, content } = req.body;
    try {
        const message = await Message.create({ room: roomId, sender: senderId, content });
        res.status(201).json(message);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
