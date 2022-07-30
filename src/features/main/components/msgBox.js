const SystemMsge = ({text}) => {
    return (
        <div className="message-from-system">
            <div className="message-from-system-bubble">
                {text}
                {"12/5 週日"}
            </div>
        </div>
    )
}
const MsgFromMe = ({time,text}) => {
    return (
        <div className="message-from-me">
            <div className="message-from-me-content">
                <h4>我 · 19:06{time}</h4>
                <div className="message-from-me-bubble">
                    {text}
                    {"Lorem ipsum dolor sit amet."}
                </div>
            </div>
        </div>
    )
}
const MsgFromOther = ({from,time,text}) => {
    return (
        <div className="message">
            <div className="message-profile-photo">
                <span className="mdi mdi-account-circle text-gray-700 text-2xl"></span>
            </div>
            <div className="message-content">
                <h4>{from}user · 19:05{time}</h4>
                <div className="message-bubble">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, omnis itaque
                    aperiam
                    hic, veniam voluptas quisquam, non illum accusantium similique doloribus modi
                    eveniet ea
                    vitae minima voluptatem. Ut, dolor culpa?
                    {text}
                </div>
            </div>
        </div>
    )
}
const MsgBox = () => {
    return (
        <>
            <SystemMsge/>
            <MsgFromMe/>
            <MsgFromOther/>
        </>
    )
}
export default MsgBox;