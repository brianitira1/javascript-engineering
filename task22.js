const WebSocket = require("clientConnection");
const { v4: uuidv4 } = require("uuid");

// Create a new WebSocket server instance
const wss = new WebSocket.Server({ port: 8000 });

// Object to store rooms and their associated clients
const rooms = {};

// Event handler for new WebSocket connections
wss.on("connection", function connection(clientConnection) {
  console.log("A client has connected.");

  // Event handler for incoming messages
  clientConnection.on("message", function incoming(message) {
    const data = JSON.parse(message);

    // Handle different message types
    if (data.type === "createRoom") {
      createRoom(clientConnection);
    } else if (data.type === "joinRoom") {
      joinRoom(clientConnection, data.roomId);
    } else {
      handleChatMessage(clientConnection, data);
    }
  });

  // Event handler for clients disconnecting
  clientConnection.on("close", function close() {
    console.log("A client has disconnected.");
    removeClientFromRooms(clientConnection);
  });
});

// Function to create a new room
function createRoom(clientConnection) {
  const roomId = uuidv4(); // Generate a unique room ID
  rooms[roomId] = [clientConnection]; // Create a new room with the client as the first participant

  // Send the room ID back to the client
  clientConnection.send(JSON.stringify({ type: "roomId", roomId: roomId }));
  console.log(`Room created: ${roomId}`);
}

// Function to join an existing room
function joinRoom(clientConnection, roomId) {
  if (rooms[roomId]) {
    rooms[roomId].push(clientConnection); // Add the client to the room
    console.log(`Client joined room: ${roomId}`);
  } else {
    console.log(`Room ${roomId} does not exist.`);
  }
}

// Function to handle chat messages
function handleChatMessage(data) {
  const roomId = data.roomId;
  if (roomId && rooms[roomId]) {
    // Broadcast the message to all clients in the room
    rooms[roomId].forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(
          JSON.stringify({
            type: "message",
            sender: data.sender,
            content: data.content,
          })
        );
      }
    });
  }
}

// Function to remove a client from all rooms
function removeClientFromRooms(clientConnection) {
  Object.keys(rooms).forEach((roomId) => {
    rooms[roomId] = rooms[roomId].filter((client) => client !== clientConnection); // Remove the client from the room
    if (rooms[roomId].length === 0) {
      delete rooms[roomId]; // Delete the room if it's empty
    }
  });
}
