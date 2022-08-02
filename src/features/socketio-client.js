import {io} from "socket.io-client";
const socket = io("http://localhost:8080",{
    path: "/chat",
    transports: ['websocket']
});
socket.on("onnection",async () => {
    console.log("jizz");
});

// const receiveMsg = ws.on(async() => {
//     await ws.emit("");
// })

