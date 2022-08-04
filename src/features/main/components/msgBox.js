import { useSelector } from "react-redux"

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
const MsgBox = () => {
    const [messages, name] = useSelector(state => [state.user.messages, state.user.name]);
    // console.log(messages);
    return (
        <>
            {messages.map(msg => {
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
        </>
    )
}
export default MsgBox;