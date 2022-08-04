// import ws from "./socketio-client";
import { io } from "socket.io-client";
import { startWebSocket, receiveSend, wsConnected, sendMessage, wsDisconnected, endWebSocket } from "./features/reducers/userSlice";
const wsMiddleware = (socket)=>({ getState, dispatch }) => next => action => {
    let user = getState().user;
    let connected = getState().user.isConnected;
    if(startWebSocket.match(action)){
        socket.connect(user.name,user.num);
        socket.on("connect",()=>{
            console.log(socket);
            socket.emit("jizz");
            dispatch(wsConnected());
        })
    }
    if(connected){
        console.log(socket.socket.connected)
        // socket.emit("jizz");
        socket.on("jizz",()=>{
            socket.emit("jizz");
            console.log("jizz");
        })
    }
    return next(action);

}
export default wsMiddleware;