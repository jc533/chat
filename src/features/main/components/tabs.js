import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addFriend, createGroup } from "../../reducers/userSlice";
import DropdownMenu from "./menu";

const MsgTab = () => {
    const rooms = useSelector(state => state.user.rooms);
    return (
        <div id="add_rooms">
            {rooms.map((obj, id) => (
                <Link key={id} to="/" className="aside-item">
                    <span className={`mdi mdi-account-${obj.type}outline text-gray-700 text-4xl mr-4`}></span>
                    <div className="inline-block">
                        <h4 className="text-gray-900 text-lg">{obj.name}</h4>
                        <p className="text-gray-600">{obj.description}</p>
                    </div>
                </Link>
            ))}
        </div>
    )
}
const FriendTab = () => {
    const [action, setAction] = useState("none");
    switch (action) {
        case "createGroup":
            return (<CreateGroup action={action} setAction={setAction} />);
        case "addFriend":
            return (<Addfriend action={action} setAction={setAction} />);
        default:
            return (<Default action={action} setAction={setAction} />);
    }

}
const Addfriend = ({ action, setAction }) => {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const sendAdd = (e) => { 
        e.preventDefault();
        dispatch(addFriend(name));
        setName("");
        setAction("none");
    };
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
const CreateGroup = ({ action, setAction }) => {
    const initFriends = useSelector(state => state.user.friends);
    const [friends, setFriends] = useState([]);
    const dipatch = useDispatch();
    const sendCreate = (e) => {
        e.preventDefault();
        const member = friends.filter(obj => obj.choosed).map(obj => obj.name);
        setFriends(friends.map(obj => { obj.choosed = false; return obj }));
        console.log(member);
        setAction("none");
        dipatch(createGroup(member));
    }
    const handleChoose = (name) => {
        setFriends(
            friends.map((obj) => {
                if (obj.name === name) {
                    obj.choosed = !obj.choosed;
                }
                return obj;
            }));
    }
    useEffect(() => {
        let tmp = initFriends.map((obj) => {
            let ob = { ...obj }
            ob.choosed = false;
            return ob;
        });
        setFriends(tmp);
    }, [initFriends]);
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
                                <input checked={obj.choosed} onChange={() => handleChoose(obj.name)} type="checkbox" name="" id="" />
                                <span className="custom-checkbox-icon"></span>
                            </label>))}

                        <div className="mt-4 grid grid-cols-2 gap-4">
                            <button className="btn btn-secondary" type="reset"
                                onClick={() => setAction("none")}>取消</button>
                            <button type="submit" className="btn btn-primary">建立</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
const Default = ({ action, setAction }) => {
    return (
        <>
            <div className="p-3 grid grid-cols-2 gap-4">
                <button className="w-full btn btn-primary" onClick={() => setAction("addFriend")}>
                    <span className="mdi mdi-account-plus text-2xl block"></span>
                    新增朋友
                </button>
                <button className="w-full btn btn-primary" onClick={() => setAction("createGroup")}>
                    <span className="mdi mdi-account-multiple-plus text-2xl block"></span>
                    建立群組
                </button>
            </div >
            <FriendList />
        </>
    );
}
const FriendList = () => {
    const friends = useSelector(state => state.user.friends);
    return (<>
        {friends.map((obj, id) => (
            <div key={id} className="aside-item flex justify-between">
                <div className="flex items-center">
                    <span className="mdi mdi-account text-gray-700 text-2xl mr-4"></span>
                    <h4 className="text-gray-900 inline-block">{obj.name}</h4>
                </div>
                <DropdownMenu
                    btnClass="btn-icon mdi mdi-dots-vertical"
                    options={
                        <>
                            <a href="" className="dropdown-item" target="_blank">
                                <span className="mdi mdi-message-processing"></span>
                                聊天
                            </a>
                            <a href="" className="dropdown-item">
                                <span className="mdi mdi-delete"></span>
                                刪除
                            </a>
                        </>
                    }
                />
            </div>
        ))}
    </>
    )
}
export { MsgTab, FriendTab };