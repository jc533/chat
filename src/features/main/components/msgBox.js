import { useRef, useState,useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { loadMsgs } from "../../reducers/userSlice"

const SystemMsge = ({ text }) => {
    return (
        <div className="message-from-system">
            <div className="message-from-system-bubble">
                {text}
            </div>
        </div>
    )
}
const MsgFromMe = ({ time, text }) => {
    return (
        <div className="message-from-me">
            <div className="message-from-me-content">
                <h4>我 · 19:06{time}</h4>
                <div className="message-from-me-bubble">
                    {text}
                </div>
            </div>
        </div>
    )
}
const MsgFromOther = ({ from, time, text }) => {
    return (
        <div className="message">
            <div className="message-profile-photo">
                <span className="mdi mdi-account-circle text-gray-700 text-2xl"></span>
            </div>
            <div className="message-content">
                <h4>{from}user · 19:05{time}</h4>
                <div className="message-bubble">
                    {text}
                </div>
            </div>
        </div>
    )
}
const MsgBox = ({shouldScroll,setBottom}) => {
    const [messages, name] = useSelector(state => [state.user.messages, state.user.name]);
    const dispatch = useDispatch();
    const msgRef = useRef(null);
    const handleScroll = () => {
        const {scrollTop} = msgRef.current;
        if(scrollTop===0){
            dispatch(loadMsgs(messages.length));
        }
    }
    useEffect(() => {
        if(shouldScroll){
            msgRef.current.scrollTo({top:msgRef.current.scrollHeight});
            setBottom(false);
        }
    }, [name,messages]);
    // console.log(messages);
    return (
        <div ref={msgRef} onScroll={handleScroll} id="content" className="overflow-y-scroll p-4 custom-scroll-bar"
        style={{ "height": "calc(100vh - 150px)" }}>
            {messages.slice().reverse().map(msg => {
                switch (msg.name) {
                    case name:
                        return <MsgFromMe key={msg._id} text={msg.content} />
                    case "system":
                        return <SystemMsge key={msg._id} text={msg.content} />
                    default:
                        return <MsgFromOther key={msg._id} text={msg.content} />
                }
            }
            )}
        </div>
    )
}
export default MsgBox;