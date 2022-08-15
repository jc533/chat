// import ws from "./socketio-client";
import { io } from "socket.io-client";
import { startWebSocket, receiveSend, wsConnected, wsDisconnected, endWebSocket, sendMessage, createGroup, receiveAppend, loadMsgs, receiveLoad, addFriend, receiveFriend } from "./features/reducers/userSlice";
const wsMiddleware = (socket) => ({ getState, dispatch }) => next => action => {
    let user = getState().user;
    let connected = getState().user.isConnected;
    if (startWebSocket.match(action) && !connected) {
        socket.connect(user.name, user.num);
        socket.on("connect", () => {
            console.log("ws ", connected)
            dispatch(wsConnected());
        })
    }
    if (connected) {
        console.log(socket.socket.connected);
        if (sendMessage.match(action)) {
            console.log("jizz send");
            socket.emit("send_msg", action.payload);
            socket.once("receive_send", (data) => {
                console.log("receivedddd")
                dispatch(receiveSend(data));
            });
        }
        if (createGroup.match(action)) {
            socket.emit("create_room", action.payload);
            socket.once("append_room", (data) => {
                console.log("receive append")
                dispatch(receiveAppend(data));
            });
        }
        if (loadMsgs.match(action)) {
            socket.emit("load_msg", action.payload);
            socket.once("receive_data", (data) => {
                console.log("receive load");
                dispatch(receiveLoad(data));
            });
        }
        if (addFriend.match(action)) {
            if (user.name === action.payload) {
                alert("cannot add yourself as friend fool!");
            } else {
                socket.emit("add_friend", [user.name, action.payload]);
                socket.once("receive_friend", (data) => {
                    console.log("receive load");
                    dispatch(receiveFriend(data));
                });
            }
        }
    }
    return next(action);

}
export default wsMiddleware;