import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import {init} from "./reducers/userSlice";
import {setInit} from "./actions";
const Form = () => {
    const [passwd, setPasswd] = useState("");
    const [account, setAccount] = useState("");
    const [err, setErr] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleSubmit = async (e) => {
        e.preventDefault();
        let user = {name:account,pwd:passwd};
        let error = "";
        if(user.name === ""){
            error += "account can't be empty\n";
        }
        if(user.pwd === ""){
            error += "password can't be empty\n";
        }
        if(error){
            setErr(error);
            return;
        }
        setPasswd("");
        setAccount("");
        let res = await fetch("http://localhost:8080/login",{
            method: "POST",
            body: JSON.stringify(user),
            headers:{
                "Content-Type":"Application/json"
            }
        });
        res = await res.json();
        if(res.code === 404){
            alert(res.con);
            navigate("../register");
        }
        if(res.con){
            error = res.con;
            return;
        }
        setErr(error);
        dispatch(init({...res,name:user.name}));
        navigate(`../${res.num}`,{replace:true});
    }
    return (
        <form action="/login" method="post" id="login" onSubmit={handleSubmit}>
            <div className="w-full my-4">
                <label htmlFor="account" className="inline-block mb-2 text-gray-600">
                    <span className="mdi mdi-account-circle"></span> 帳號
                </label>
                <input value={account} onChange={e => setAccount(e.target.value)} 
                id="account" 
                type="text" 
                className="custom-input w-full" 
                name="user" autoFocus />
            </div>

            <div className="w-full my-4">
                <label htmlFor="password" className="inline-block mb-2 text-gray-600"><span
                    className="mdi mdi-key"></span>
                    密碼</label>
                <input value={passwd} onChange={e => setPasswd(e.target.value)} 
                id="password" 
                type="password" 
                className="custom-input w-full" 
                name="passwd" />
            </div>

            <label className="w-full my-4 custom-checkbox flex items-center">
                <input type="checkbox" name="" id="" />
                <span className="custom-checkbox-icon"></span>
                <p className="inline ml-4">記住帳號密碼</p>
            </label>
            <div className="flex justify-between items-center">
                <button type="submit" className="btn btn-primary">登入</button>
                <div>
                    <a href="#">忘記密碼</a>
                </div>
            </div>
            <div className="text-red-400" id="err_msg"><pre>{err}</pre></div>
        </form>
    );
}
const SingIn = () => {
    return (
        <header className="min-h-screen w-full flex justify-center items-center bg-gray-400 p-10">
            <div className="flex flex-wrap bg-white shadow-xl rounded-lg overflow-hidden w-full max-w-2xl">

                <div className="w-full h-8 md:w-1/2 md:h-auto flex bg-board relative">

                </div>

                <div className="w-full flex flex-col md:w-1/2 p-10">
                    <h1 className="text-3xl font-bold text-center">登入</h1>
                    <div className="mt-5">
                        <Form />
                    </div>
                </div>
            </div>
        </header>
    )
}
export default SingIn;