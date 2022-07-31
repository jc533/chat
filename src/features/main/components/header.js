import { useState } from "react"
const Header = ({sidebarToggle }) => {
    return (
        <div class="sticky bg-white md:bg-gray-200 p-4">
            <div class="mb-5 block md:hidden">
                <button onClick={sidebarToggle}
                    class="btn-actionbar mdi mdi-close text-2xl mr-3 inline md:hidden"></button>
            </div>
            <div class="flex items-center justify-between w-full">
                <h1 class="text-gray-900 text-2xl font-bold">聊天室</h1>
                <AccountMenu/>
            </div>
        </div>
    )
}
const AccountMenu = () => {
    const [isOpen,setOpen] = useState(false);
    const toggle = ()=>setOpen(!isOpen);
    return (
        <div class="relative">
            <button class="btn-actionbar flex items-center" onClick={toggle}>
                <span class="mdi mdi-account-circle text-blue-500 text-2xl"></span>
                <span class="mdi mdi-menu-down text-gray-600"></span>
            </button>

            <div class="dropdown" hidden={!isOpen} onClick={toggle}>
                <a href="/settings" class="dropdown-item" target="_blank">
                    <span class="mdi mdi-settings"></span>
                    設定
                </a>
                <a href="#" class="dropdown-item">
                    <span class="mdi mdi-logout"></span>
                    登出
                </a>
            </div>
        </div>
    )
}
export default Header;