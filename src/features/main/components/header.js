import { useState } from "react"
const Header = ({sidebarToggle }) => {
    return (
        <div className="sticky bg-white md:bg-gray-200 p-4">
            <div className="mb-5 block md:hidden">
                <button onClick={sidebarToggle}
                    className="btn-actionbar mdi mdi-close text-2xl mr-3 inline md:hidden"></button>
            </div>
            <div className="flex items-center justify-between w-full">
                <h1 className="text-gray-900 text-2xl font-bold">聊天室</h1>
                <AccountMenu/>
            </div>
        </div>
    )
}
const AccountMenu = () => {
    const [isOpen,setOpen] = useState(false);
    const toggle = ()=>setOpen(!isOpen);
    return (
        <div className="relative">
            <button className="btn-actionbar flex items-center" onClick={toggle}>
                <span className="mdi mdi-account-circle text-blue-500 text-2xl"></span>
                <span className="mdi mdi-menu-down text-gray-600"></span>
            </button>

            <div className="dropdown" hidden={!isOpen} onClick={toggle}>
                <a href="/settings" className="dropdown-item" target="_blank">
                    <span className="mdi mdi-settings"></span>
                    設定
                </a>
                <a href="#" className="dropdown-item">
                    <span className="mdi mdi-logout"></span>
                    登出
                </a>
            </div>
        </div>
    )
}
export default Header;