// import ws from "./socketio-client";
import { io } from "socket.io-client";
import { startWebSocket, receiveSend, wsConnected, wsDisconnected, endWebSocket, sendMessage } from "./features/reducers/userSlice";
const wsMiddleware = (socket)=>({ getState, dispatch }) => next => action => {
    let user = getState().user;
    let connected = getState().user.isConnected;
    if(startWebSocket.match(action)&&!connected){
        console.log("ws ",connected)
        socket.connect(user.name,user.num);
        socket.on("connect",()=>{
            dispatch(wsConnected());
        })
    }
    if(endWebSocket.match(action)&&connected){
        socket.disconect();
        dispatch(wsDisconnected());
    }
    if(connected){
        console.log(socket.socket.connected);
        socket.on("receive_send",(data)=>{
            dispatch(receiveSend(data));
        })
        if(sendMessage.match(action)){
            console.log("jizz send");
            socket.emit("send_msg",action.payload);
        }
    }
    return next(action);

}
export default wsMiddleware;