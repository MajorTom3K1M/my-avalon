const { states } = require("../utils/rules");
const { nanoid } = require("nanoid");
class RoomManager {
  constructor(options) {
    this.io = options.io;
    this.socker = options.socket;
    this.username = options.username;
    this.roomId = options.roomId;
    this.password = options.password;
    this.action = options.action; // [join, create]
    this.store = options.io.adapter;
  }

  async init(username) {
    // Stores an array containing socket ids in 'roomId'
    let clients;
    await this.io.in(this.roomId).clients((e, _clients) => {
      clients =
        _clients || console.error("[INTERNAL ERROR] Room creation failed!");
    });
    console.debug(`Connected Clients are: ${clients}`);

    if (this.action === "create") {
      // Check if room size is equal to zero
      //     If yes, create new room and join socket to the room
      //     If not, emit 'invalid operation: room already exists'

      if (clients.length < 1) {
        await this.socker.join(this.roomId);
        this.store = this.store.rooms[this.roomId];

        this.store.clients = [{ id: this.socker.id, username, isReady: false }];

        this.socker.username = username;
        console.info(`[CREATE] Client created and joined room ${this.roomId}`);
        this.socker.emit("[SUCCESS] Successfully initialised");
        return true;
      }

      console.warn(
        `[CREATE] Client denied create, as roomId ${this.roomId} already presant`
      );
      this.socker.emit("Error: Room already created. Join the room!");
      return false;
    }
  }
}

module.exports = RoomManager;
