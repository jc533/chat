import React, { useEffect } from "react";
import { io } from "socket.io-client";
import { useSelector, useDispatch } from "react-redux";
import { endWebSocket, startWebSocket,wsConnected, wsDisconnected } from "../../reducers/userSlice";
const ChatBox = ({ children }) => {
    const [num, name] = useSelector(state => [state.user.num, state.user.name]);
    const wsStatus = useSelector(state=>state.user.wsStart);
    const dispatch = useDispatch();
    useEffect(() => {
        let socket = null;
        if (num && name) {
            dispatch(startWebSocket());
            socket = io("http://localhost:8080", {
                transports: ['websocket'],
                query: {
                    name: name,
                    room: num
                }
            });
            socket.connect();
            socket.on("connect", () => {
                console.log(socket.connected);
                dispatch(wsConnected());
            });
            socket.on("connect_error", (err) => {
                console.log(err);

            });
            socket.on("disconnect", (reason) => {
                dispatch(wsDisconnected());
                console.log(reason);
            });
            socket.on("jizz",()=>{
                console.log("jizz");
                socket.emit("jizz");
            });
            if(wsStatus){
                console.log("fuck");
                socket.emit("jizz");
            }
        }
        return () => {
            if (socket) {
                socket.disconnect();
                dispatch(wsDisconnected());
            }
            // dispatch(endWebSocket());
        };
    }, [name, num,wsStatus]);
    return (
        <React.Fragment>
            {children}
        </React.Fragment>
    )
}
export default ChatBox;