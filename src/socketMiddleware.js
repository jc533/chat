// import ws from "./socketio-client";
import { io } from "socket.io-client";
import { startWebSocket, receiveSend, wsConnected, wsDisconnected, endWebSocket, sendMessage, createGroup, receiveAppend } from "./features/reducers/userSlice";
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
            socket.once("receive_send",(data)=>{
                console.log("receivedddd")
                dispatch(receiveSend(data));
            });
        }
        if(createGroup.match(action)){
            socket.emit("create_room",action.payload);
            socket.once("append_room",(data)=>{
                console.log("receive append")
                dispatch(receiveAppend(data));
            });
        }
    }
    return next(action);

}
export default wsMiddleware;