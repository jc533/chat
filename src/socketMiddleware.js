// import ws from "./socketio-client";
import { io } from "socket.io-client";
import { startWebSocket, receiveSend, wsConnected, sendMessage } from "./features/reducers/userSlice";
const wsMiddleware = ({ getState, dispatch }) => next => action => {
    let socket;
    let user = getState().user;
    console.log(user)
    let connected = getState().user.isConnected;
    if (!connected && !startWebSocket.match(action)) {
        return next(action);
    }
    socket = io("http://localhost:8080", {
        transports: ['websocket'],
        query: {
            name: user.name,
            room: user.num
        }
    });
    socket.on("connect", () => {
        socket.emit("jizz");
        dispatch(wsConnected());
    });
    socket.on("receive_send", (data) => {
        dispatch(receiveSend(data))
    })
    socket.on("disconnect",()=>{
        console.log("disconnect");
    })
    if (sendMessage.match(action)) {
        console.log(action.payload);
        socket.emit("send_msg");
    }
    next(action);

}
export default wsMiddleware;