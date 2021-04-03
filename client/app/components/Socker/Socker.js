import openSocket from "socket.io-client";

export function sockerInit(username, roomId, action, options) {
  const socker = openSocket(`${sockerUrl}`, {
    query: {
      username,
      roomId,
      action,
      options: options && JSON.stringify(options),
    },
  });
  return socker;
}
