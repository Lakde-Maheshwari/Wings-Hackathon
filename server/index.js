const { Server } = require("socket.io");

const io = new Server(8000, {
    cors: true,
});

const emailToSocketIdMap = new Map();
const socketidToEmailMap = new Map();

io.on('connection', (socket) => {
    console.log(`Socket connected`, socket.id);
    socket.on("room:join", (data) => {
       const {email, room} = data
       emailToSocketIdMap.set(email, socket.id)
       socketidToEmailMap.set(socket.id, email);
       io.to(room).emit("user:joined", {email, id: socket.id});
       socket.join(room);
       io.to(socket.id).emit('room:join', data);
    });
<<<<<<< HEAD


=======
});
>>>>>>> e210a2c542fe14a42ac0d20a0116a3d46cd842a0

const startServer = async () => {
  try {
    connectDB();
    app.listen(8002, () => console.log("Server started at 8002"));
  } catch (error) {
    console.log(error);
  }
};

startServer();
    socket.on
<<<<<<< HEAD
});

=======
>>>>>>> e210a2c542fe14a42ac0d20a0116a3d46cd842a0
