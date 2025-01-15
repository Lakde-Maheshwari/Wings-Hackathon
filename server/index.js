const { Server } = require("socket.io");

const io = new Server(8000, {
    cors: {
        origin: "*", // Allow all origins (adjust based on your setup)
        methods: ["GET", "POST"],
    },
});

const emailToSocketIdMap = new Map();
const socketidToEmailMap = new Map();

io.on('connection', (socket) => {
    console.log(`Socket connected: ${socket.id}`);

    socket.on("room:join", (data) => {
        const { email, room } = data;
        console.log(`User ${email} joined room ${room}`);
        
        emailToSocketIdMap.set(email, socket.id);
        socketidToEmailMap.set(socket.id, email);

        // Notify other users in the room
        io.to(room).emit("user:joined", { email, id: socket.id });

        // Join the room
        socket.join(room);

        // Acknowledge to the user
        io.to(socket.id).emit('room:join', data);
    });

    // Handle disconnection
    socket.on('disconnect', () => {
        console.log(`Socket disconnected: ${socket.id}`);
        const email = socketidToEmailMap.get(socket.id);
        if (email) {
            emailToSocketIdMap.delete(email);
            socketidToEmailMap.delete(socket.id);
        }
    });
});

console.log("Socket.IO server running on port 8000");

