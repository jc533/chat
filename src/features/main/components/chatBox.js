import React, { useEffect } from "react";
import { io } from "socket.io-client";
import { useSelector, useDispatch } from "react-redux";
import { endWebSocket, startWebSocket, wsConnected, wsDisconnected } from "../../reducers/userSlice";

const ChatBox = ({ children }) => {
    const user = useSelector(state => {
        return {
            num: state.user.num,
            name: state.user.name,
            connected: state.user.isConnected,
            wsStatus: state.user.wsStatus
        }
    });
    const dispatch = useDispatch();
    console.count("hi");
    //async logic !!
    useEffect(() => {
        if (user.wsStatus === "disconnected") {
            if (user.name && user.num && !user.connected) {
                console.log(user.wsStatus);
                dispatch(startWebSocket());
            }
        }
        // return ()=>dispatch(endWebSocket());
    }, [user, dispatch]);
    return (
        <React.Fragment>
            {children}
        </React.Fragment>
    )
}
export default ChatBox;