import { useEffect, useState } from "react";
import ClickAwayListener from "react-click-away-listener";
import { useDispatch, useSelector } from "react-redux";
const Infobar = ({ active }) => {
    const [action, setAction] = useState("none");
    return (
        <ClickAwayListener onClickAway={() => setAction("none")}>
            <div id="infobar" className={`custom-scroll-bar ${active ? "" : "infobar-hide"}`}
                style={{ "height": "calc(100vh - 62px)" }}>
                <Default action={action} setAction={setAction} />
                <Search action={action} setAction={setAction} />
                <Leave action={action} setAction={setAction} />
                <AddFriend action={action} setAction={setAction} />
            </div>
        </ClickAwayListener>
    );
}
const Default = ({ action, setAction }) => {
    return (
        <div hidden={action !== "none"} className="absolute w-full">
            <div className="text-center p-3">
                <span className="mdi mdi-account-group-outline text-blue-500 text-5xl"></span>
                <h4 className="text-gray-900 text-xl">群組</h4>
            </div>

            <hr className="border-gray-300" />

            <div className="p-2">
                <button className="list-item" onClick={() => setAction("search")}>
                    <h4>搜尋對話</h4>
                    <span className="mdi mdi-magnify text-gray-600 text-xl"></span>
                </button>
                <button className="list-item">
                    <div className="text-left">
                        <h4>通知</h4>
                        <p className="text-sm text-gray-600">靜音</p>
                    </div>
                    <span className="mdi mdi-bell-off-outline text-gray-600 text-xl"></span>
                </button>
                <button className="list-item">
                    <div className="text-left">
                        <h4>照片、影片</h4>
                    </div>
                    <span className="mdi mdi-image-multiple text-gray-600 text-xl"></span>
                </button>
                <button className="list-item" onClick={() => setAction("leave")}>
                    <div className="text-left">
                        <h4>退出群組</h4>
                    </div>
                    <span className="mdi mdi-logout text-red-500 text-xl"></span>
                </button>
            </div>

            <hr className="border-gray-300" />

            <div className="p-2">
                <h4 className="text-gray-600 pl-2 text-sm mb-2">成員</h4>
                <button className="list-item justify-start" onClick={() => setAction("addFriend")}>
                    <span className="mdi mdi-account-plus text-blue-500 text-xl"></span>
                    <p className="ml-4">新增成員</p>
                </button>
                <div className="list-item justify-start">
                    <span className="mdi mdi-account text-gray-600 text-xl"></span>
                    <p className="ml-4">朋友</p>
                </div>
            </div>
        </div>
    );
}
const Search = ({ action, setAction }) => {
    //click away
    const onSearch = (e) => {
        e.preventDefault();
    }
    return (
        <div hidden={action !== "search"} className="w-full absolute">
            <div className="p-3">
                <div className="flex items-center">
                    <button className="mdi mdi-arrow-left btn-actionbar" onClick={() => setAction("none")}></button>
                    <p className="ml-4 text-gray-900 text-lg">搜尋</p>
                </div>

                <form action="" onSubmit={onSearch} className="mt-4">
                    <input type="text" className="custom-input w-full" />

                    <div className="mt-4 grid grid-cols-2 gap-4">
                        <button className="btn btn-secondary" type="reset" onClick={() => setAction("none")}>
                            取消
                        </button>
                        <button type="submit" className="btn btn-primary">搜尋</button>
                    </div>
                </form>
            </div>
        </div >
    )
}
const Leave = ({ action, setAction }) => {
    return (
        <div hidden={action !== "leave"} onClick={() => setAction("none")} className="w-full absolute">
            <div className="p-3">
                <div className="flex items-center">
                    <button className="mdi mdi-arrow-left btn-actionbar" onClick={() => setAction("none")}></button>
                    <p className="ml-4 text-gray-900 text-lg">退出群組</p>
                </div>

                <p className="text-gray-600 my-5">
                    你確定要退出？
                </p>

                <div className="mt-4 grid grid-cols-2 gap-4">
                    <button className="btn btn-secondary" type="reset"
                        onClick={() => setAction("none")}>取消</button>
                    <button type="submit" className="btn btn-danger">退出</button>
                </div>

            </div >
        </div >
    );
}
const AddFriend = ({ action, setAction }) => {
    const initFriends = useSelector(state=>state.user.friends);
    const [friends, setFriends] = useState([]);
    const dipatch = useDispatch();
    const handleChoose = (name)=>{
        setFriends(
            friends.map((obj)=>{
            if(obj.name===name){
                obj.choosed = !obj.choosed;
            }
            return obj;
        }));
    }
    useEffect(() => {
        let tmp = initFriends.map((obj)=>{
            let ob = {...obj}
            ob.choosed=false;
            return ob;
        });
        setFriends(tmp);
    }, [initFriends]);
    const addFriend = (e) => {
        e.preventDefault();
    }
    return (
        <div hidden={action !== "addFriend"} className="w-full absolute">
            <div className="p-3">
                <div className="flex items-center">
                    <button className="mdi mdi-arrow-left btn-actionbar" onClick={() => setAction("none")}></button>
                    <p className="ml-4 text-gray-900 text-lg">新增成員</p>
                </div>

                <form className="my-2" onSubmit={addFriend}>
                    {friends.map((obj,id)=>(
                    <label key={id} className="list-item custom-checkbox">
                        <div className="flex items-center">
                            <span className="mdi mdi-account text-xl text-gray-600 mr-4"></span>
                            <p className="text-gray-900">{obj.name}</p>
                        </div>
                        <input checked={obj.choosed} onChange={()=>handleChoose(obj.name)} type="checkbox" name="" id="" />
                        <span className="custom-checkbox-icon"></span>
                    </label>
                    ))}

                    <div className="mt-4 grid grid-cols-2 gap-4">
                        <button className="btn btn-secondary" type="reset"
                            onClick={() => setAction("none")}>取消</button>
                        <button type="submit" className="btn btn-primary">新增</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Infobar;