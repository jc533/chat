import { useState, useEffect } from "react";
import { Navbar, InputBox, MsgBox, Infobar, Header, Sidebar, ChatBox } from "./components";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { endWebSocket, startWebSocket, switchRoom } from "../reducers/userSlice";
import { useParams } from "react-router-dom";


const Main = () => {
    const [sideActive, setSidebar] = useState(false);
    const [infoActive, setInfobar] = useState(true);
    const [scrollBottom, setBottom] = useState(true);
    const sidebarToggle = () => setSidebar(!sideActive);
    const infobarToggle = () => setInfobar(!infoActive);
    const dispatch = useDispatch();
    const num = useSelector(state=>state.user.num);
    let {room} = useParams();
    useEffect(() => {
        if(room!==num){
            dispatch(switchRoom(room));
        }
    }, [room,num,dispatch]);
    return (
        <main className="h-screen overflow-y-hidden flex">
            <div id="bg-dark" className={`fixed top-0 left-0 w-full h-full bg-dark ${sideActive ? "block" : "hidden"}`}></div>
            <Sidebar active={sideActive} sidebarToggle={sidebarToggle} />
            <section className="w-full h-screen overflow-y-hidden md:w-3/4 relative">
                <Navbar sidebarToggle={sidebarToggle} infobarToggle={infobarToggle} />
                <div className="flex overflow-x-hidden">
                    <ChatBox>
                        <div id="chat" className={`w-3/4 ${infoActive ? "" : "infobar-hide-chat"}`}>
                            <MsgBox shouldScroll={scrollBottom} setBottom={setBottom} />
                            <div className="w-full p-3 bg-white border-t border-gray-300">
                                <InputBox setBottom={setBottom}/>
                            </div>
                        </div>
                    </ChatBox>
                    <Infobar active={infoActive} />
                </div>
            </section>
        </main>
    )
}
export default Main;