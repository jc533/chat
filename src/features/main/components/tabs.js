import { useState } from "react";

const MsgTab = () => {
    const rooms = [
        { name: "群組", type: "group-", description: "Lorem, ipsum dolor." },
        { name: "群組", type: "group-", description: "Lorem, ipsum dolor." },
        { name: "個人", type: "", description: "Lorem, ipsum dolor." }
    ];
    return (
        <div id="add_rooms">
            {rooms.map((obj, id) => (
                <a key={id} href="#" className="aside-item">
                    <span className={`mdi mdi-account-${obj.type}outline text-gray-700 text-4xl mr-4`}></span>
                    <div className="inline-block">
                        <h4 className="text-gray-900 text-lg">{obj.name}</h4>
                        <p className="text-gray-600">{obj.description}</p>
                    </div>
                </a>
            ))}
        </div>
    )
}
const FriendTab = () => {
    const [action, setAction] = useState("none");
    switch (action) {
        case "createGroup":
            return (<CreateGroup action={action} setAction={setAction}/>);
        case "addFriend":
            return (<Addfriend action={action} setAction={setAction}/>);
        default:
            return (<Default action={action} setAction={setAction}/>);
    }

}
const Addfriend = ({ action, setAction }) => {
    const sendAdd = (e) => { e.preventDefault(); };
    const [name, setName] = useState("");
    return (
        <div hidden={action !== "addFriend"} className="py-3 absolute w-full">
            <div className="bg-white rounded-lg p-3 text-center">
                <span className="mdi mdi-account-plus-outline text-blue-500 text-4xl"></span>
                <p className="text-xl">新增朋友</p>

                <form onSubmit={sendAdd} className="p-3">
                    <p className="text-gray-600 mb-2">請在下方輸入你要新增的帳號。</p>
                    <input
                        value={name}
                        onChange={(e) => { setName(e.target.value) }}
                        type="text"
                        className="custom-input w-full" x-ref="addFriendInput" required />
                    <div className="mt-4 grid grid-cols-2 gap-4">
                        <button className="btn btn-secondary"
                            type="reset" onClick={() => setAction("none")}>取消</button>
                        <button type="submit" className="btn btn-primary">新增</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
const CreateGroup = ({ action,setAction }) => {
    const sendCreate = (e) => { e.preventDefault(); }
    // don't know how to bind checkbox;
    const [friends, setFriends] = useState([{ name: "朋友", choosed: false }]);
    return (
        <>
            <div className="py-3 absolute w-full">
                <div className="bg-white rounded-lg p-3 text-center">
                    <span className="mdi mdi-account-multiple-plus-outline text-blue-500 text-4xl"></span>
                    <p className="text-xl">建立群組</p>

                    <form onSubmit={sendCreate} className="p-3">
                        {friends.map((obj, id) => (
                            <label key={id} className="list-item custom-checkbox">
                                <div className="flex items-center">
                                    <span className="mdi mdi-account text-xl text-gray-600 mr-4"></span>
                                    <p className="text-gray-900">{obj.name}</p>
                                </div>
                                <input type="checkbox" name="" id="" />
                                <span className="custom-checkbox-icon"></span>
                            </label>))}

                        <div className="mt-4 grid grid-cols-2 gap-4">
                            <button className="btn btn-secondary" type="reset"
                                onClick={()=>setAction("none")}>取消</button>
                            <button type="submit" className="btn btn-primary">建立</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
const Default = ({action,setAction}) => {
    return (
        <>
            <div className="p-3 grid grid-cols-2 gap-4">
                <button className="w-full btn btn-primary" onClick={()=>setAction("addFriend")}>
                    <span className="mdi mdi-account-plus text-2xl block"></span>
                    新增朋友
                </button>
                <button className="w-full btn btn-primary" onClick={()=>setAction("createGroup")}>
                    <span className="mdi mdi-account-multiple-plus text-2xl block"></span>
                    建立群組
                </button>
            </div >

            <div className="aside-item flex justify-between">
                <div className="flex items-center">
                    <span className="mdi mdi-account text-gray-700 text-2xl mr-4"></span>
                    <h4 className="text-gray-900 inline-block">朋友</h4>
                </div>
                <div className="relative">
                    <button className="btn-icon mdi mdi-dots-vertical"
                        onclick="dropdownOpen=!dropdownOpen"></button>
                    <div className="dropdown" x-show="dropdownOpen" onclick="dropdownOpen = false">
                        <a href="settings.html" className="dropdown-item" target="_blank">
                            <span className="mdi mdi-message-processing"></span>
                            聊天
                        </a>
                        <a href="" className="dropdown-item">
                            <span className="mdi mdi-delete"></span>
                            刪除
                        </a>
                    </div>
                </div >
            </div >
        </>
    );
}
export { MsgTab, FriendTab };