const Sidebar = () => {
    return (
        <>
        <Tabbar/>
        </>
    )
}
const Tabbar = ({tab,setTab}) => {
    return (
        <div class="w-full flex items-center">
            <button
                class={`w-1/2 p-2 mdi mdi-account-multiple border-b-2 border-gray-200 text-gray-600 hover:bg-gray-300 focus:outline-none 
                ${tab === 'friends'?'text-blue-500 border-blue-500' : ""}`}
                onClick={()=>setTab('friends')}>
                朋友</button>
            <button
                class={`w-1/2 p-2 mdi mdi-message-text border-b-2 border-gray-200 text-gray-600 hover:bg-gray-300 focus:outline-none
                ${tab === 'message'?'text-blue-500 border-blue-500' : ""}`} onClick={()=>setTab('message')}>
                訊息</button>
        </div>
    )
}
export default Sidebar;