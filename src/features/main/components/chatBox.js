import React, { useEffect } from "react";
import { io } from "socket.io-client";
import { useSelector, useDispatch } from "react-redux";
import { endWebSocket, startWebSocket,wsConnected, wsDisconnected } from "../../reducers/userSlice";

const ChatBox = ({ children }) => {
    const [num, name] = useSelector(state => [state.user.num, state.user.name]);
    const connected = useSelector(state => state.user.isConnected);
    const wsStatus = useSelector(state=>state.user.wsStart);
    const dispatch = useDispatch();

    useEffect(() => {
        if(name&&num&&!connected){
            dispatch(startWebSocket());
        }
        // return ()=>dispatch(endWebSocket());
    }, [name,num,connected]);
    return (
        <React.Fragment>
            {children}
        </React.Fragment>
    )
}
export default ChatBox;