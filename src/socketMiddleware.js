// import ws from "./socketio-client";
import { io } from "socket.io-client";
import { webSocket } from "./features/reducers/userSlice";
const wsMiddleware = store => next => action => {
    if (webSocket.match(action)) {
        return next(action);
    }
    const socket = io("http://localhost:8080", {
        transports: ['websocket']
    });
    socket.on("connect", () => {
        console.log("jizz");
        console.log(socket.id)
    });
    next(action);
}
export default wsMiddleware;