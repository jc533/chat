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
    if(connected){
        console.log(socket.socket.connected);
        if(sendMessage.match(action)){
            console.log("jizz send");
            socket.emit("send_msg",action.payload);
            socket.on("receive_send",(data)=>{
                console.log("receivedddd")
                dispatch(receiveSend(data));
            });
        }
    }
    return next(action);

}
export default wsMiddleware;