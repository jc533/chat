import { useState } from "react";
import Header from "./header";
import { FriendTab, MsgTab } from "./tabs";

const Sidebar = ({active,sidebarToggle}) => {
    const [tab,setTab] = useState("messages"); 
    return (
        <aside id="sidebar" className={`h-screen sidebar overflow-y-scroll custom-scroll-bar 
        ${active?"sidebar-active":"sidebar-hide"}`}>
            <Header sidebarToggle={sidebarToggle}/>
            <Tabbar tab={tab} setTab={setTab}/>
            <Tab tab={tab}/>
        </aside>
    )
}
const Tabbar = ({tab,setTab}) => {
    return (
        <div className="w-full flex items-center">
            <button
                className={`w-1/2 p-2 mdi mdi-account-multiple border-b-2 border-gray-200 text-gray-600 hover:bg-gray-300 focus:outline-none 
                ${tab === 'friends'?'text-blue-500 border-blue-500' : ""}`}
                onClick={()=>setTab('friends')}>
                朋友</button>
            <button
                className={`w-1/2 p-2 mdi mdi-message-text border-b-2 border-gray-200 text-gray-600 hover:bg-gray-300 focus:outline-none
                ${tab === 'messages'?'text-blue-500 border-blue-500' : ""}`} onClick={()=>setTab('messages')}>
                訊息</button>
        </div>
    )
}
const Tab = ({tab,setTab}) => {
    switch(tab){
        case "messages":
            return (<MsgTab/>);
        case "friends":
            return (<FriendTab/>);
        default:
            return (<MsgTab/>);
    }
}
export default Sidebar;