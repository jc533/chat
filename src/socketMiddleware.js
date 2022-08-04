// import ws from "./socketio-client";
import { io } from "socket.io-client";
import { startWebSocket, receiveSend, wsConnected, sendMessage, wsDisconnected, endWebSocket } from "./features/reducers/userSlice";
const wsMiddleware = ({ getState, dispatch }) => next => action => {
    let user = getState().user;
    // console.log(user)
    let connected = getState().user.isConnected;
    if (!connected && !startWebSocket.match(action)) {
        return next(action);
    }
    const socket = io("http://localhost:8080", {
        transports: ['websocket'],
        query: {
            name: user.name,
            room: user.num
        },
        autoConnect:false
    });
    if(!connected&&startWebSocket.match(action)){
        socket.connect();
    }
    socket.on("connect", () => {
        socket.emit("jizz");
        dispatch(wsConnected());
    });
    socket.on("receive_send", (data) => {
        dispatch(receiveSend(data))
    });
    socket.on("connect_error",(err)=>{
        console.log(err);
    })
    socket.on("disconnect",(reason)=>{
        console.log(reason);
        dispatch(wsDisconnected());
    });
    socket.on("jizz",()=>{
        console.log("jizz");
        // socket.emit("jizz");
    })
    if (endWebSocket.match(action)) {
        socket.disconnect();
    }
    if (sendMessage.match(action)) {
        console.log(action.payload);
        socket.emit("send_msg");
    }
    next(action);

}
export default wsMiddleware;