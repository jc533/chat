import {io} from "socket.io-client";
const ws = io("http://localhost:8080",{
    path: "/chat",
    transports: ['websocket']
});

// const receiveMsg = async() => {
//     await ws.emit("");
// }
