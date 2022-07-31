import { useState } from "react";
import { Navbar, InputBox, MsgBox, Infobar, Header } from "./components";
const Main = () => {

    return (
        <main className="h-screen overflow-y-hidden flex">
            <div id="bg-dark" className="fixed top-0 left-0 w-full h-full bg-dark hidden"></div>
            <aside id="sidebar" className="h-screen sidebar overflow-y-scroll custom-scroll-bar sidebar-hide">
                <Header />
            </aside>
            <section className="w-full h-screen overflow-y-hidden md:w-3/4 relative">
                <Navbar />
                <div className="flex overflow-x-hidden">
                    <div id="chat" className="w-3/4">
                        <div id="content" className="overflow-y-scroll p-4 custom-scroll-bar"
                            style={{ "height": "calc(100vh - 150px)" }}>
                            <MsgBox />
                        </div>
                        <div className="w-full p-3 bg-white border-t border-gray-300">
                            <InputBox />
                        </div>
                    </div>
                    <Infobar />
                </div>
            </section>
        </main>
    )
}
export default Main;