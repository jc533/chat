import { useState } from "react";
import { Navbar, InputBox, MsgBox, Infobar, Header, Sidebar } from "./components";
const Main = () => {
    const [sideActive,setSidebar] = useState(false);
    const [infoActive,setInfobar] = useState(true);
    const sidebarToggle = ()=>setSidebar(!sideActive);
    const infobarToggle = ()=>setInfobar(!infoActive);
    return (
        <main className="h-screen overflow-y-hidden flex">
            <div id="bg-dark" className={`fixed top-0 left-0 w-full h-full bg-dark ${sideActive?"block":"hidden"}`}></div>
            <Sidebar active={sideActive} sidebarToggle={sidebarToggle} />
            <section className="w-full h-screen overflow-y-hidden md:w-3/4 relative">
                <Navbar sidebarToggle={sidebarToggle} infobarToggle={infobarToggle} />
                <div className="flex overflow-x-hidden">
                    <div id="chat" className={`w-3/4 ${infoActive?"":"infobar-hide-chat"}`}>
                        <div id="content" className="overflow-y-scroll p-4 custom-scroll-bar"
                            style={{ "height": "calc(100vh - 150px)" }}>
                            <MsgBox />
                        </div>
                        <div className="w-full p-3 bg-white border-t border-gray-300">
                            <InputBox />
                        </div>
                    </div>
                    <Infobar active={infoActive} />
                </div>
            </section>
        </main>
    )
}
export default Main;