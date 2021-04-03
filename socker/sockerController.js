const socketIO = require("socket.io");
const Room = require("../controllers/roomManager");

module.exports = (server) => {
  const io = socketIO(server);

  const room_list = {};
  const room_id = 0;
  const show_emit = false;

  console.info("Socketio initialised!");

  io.set("log level", 1);

  io.on("connection", async (socket) => {
    // if (show_emit) console.log("emit socket open (one client)");
    // const { username, roomId, action, options } = socket.handshake.query;
    // const room = new Room({
    //   io,
    //   socket,
    //   username,
    //   roomId,
    //   action,
    //   options,
    // });
    // const joinedRoom = await room.init(username);
    console.info("Client Connected");

    // if (joinedRoom) {
    // room.showPlayers();
    // room.isReady();
    // room.shiftTurn();
    // }
    // socket.emit("open", { room_list: room_list, room_id: null });

    // const client = {
    //   socket: socket,
    //   name: false,
    //   id: null,
    //   room_id: null,
    // };

    // socket.on("createRoom", () => {
    //   // Client create new room
    //   console.log("create new room");
    //   const room = {
    //     room_name: "",
    //     turn: 0,

    //     success_time: 0,
    //     fail_time: 0,
    //     vote_turn: 0,
    //     vote_success: 0,
    //     vote_fail: 0,

    //     //for characters setting
    //     max_good: 0,
    //     max_evil: 0,
    //     good_characters: [],
    //     evil_characters: [],
    //     all_characters: [],

    //     //for mission sending (number of ppl of team & the 4th mission need 2 fail or not)
    //     team_members: [],

    //     state: states[0],

    //     //player information
    //     player_data: [],
    //     player_id: 0,
    //     room_owner_id: null,
    //     leader_id: null,
    //   };
    // });
  });
};
