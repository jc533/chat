import {io} from "socket.io-client";
const ws = io("http://localhost:8080",{
    transports: ['websocket']
});
export default ws;

// const receiveMsg = ws.on(async() => {
//     await ws.emit("");
// })

