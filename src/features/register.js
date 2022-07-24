import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Form = () => {
    const [passwd, setPasswd] = useState("");
    const [confirmPasswd, setConfirm] = useState("");
    const [account, setAccount] = useState("");
    const [err, setErr] = useState("");
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        let user = { 
            name: account, 
            pwd: passwd, 
            passwd:confirmPasswd
        };
        let error = "";
        if (user.name === "") {
            error += "account can't be empty\n";
        }if (user.pwd === "") {
            error += "password can't be empty\n";
        }if (user.passwd === "") {
            error += "confirm password can't be empty\n";
        }if (user.pwd !== user.passwd) {
            error += "fail to confirm password\n";
        }
        if (error) {
            setErr(error);
            return;
        }
        setPasswd("");
        setConfirm("");
        setAccount("");
        let res = await fetch("http://localhost:8080/register", {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                "Content-Type": "Application/json"
            }
        });
        // console.log(res.status);
        res = await res.json();
        if (res.code === 302) {
            alert(res.con);
            navigate("../login");
        }
        if (res.con) {
            error = res.con;
            return;
        }
        console.log(res);
        setErr(error);
        navigate("../login", { replace: true });
    }
    return (
        <form action="/register" method="post" id="register" onSubmit={handleSubmit}>
            <div className="w-full my-4">
                <label htmlFor="account" className="inline-block mb-2 text-gray-600"><span
                    className="mdi mdi-account-circle"></span> 帳號</label>
                <input 
                value={account}
                onChange={e=>setAccount(e.target.value)}
                id="account" 
                type="text" 
                className="custom-input w-full" 
                name="user" autoFocus 
                />
            </div>

            <div className="w-full my-4">
                <label htmlFor="password" className="inline-block mb-2 text-gray-600"><span
                    className="mdi mdi-key"></span>
                    密碼</label>
                <input 
                value={passwd}
                onChange={e=>setPasswd(e.target.value)}
                id="password" 
                type="password" 
                className="custom-input w-full" 
                name="passwd" />
            </div>

            <div className="w-full my-4">
                <label htmlFor="passwordagain" className="inline-block mb-2 text-gray-600"><span
                    className="mdi mdi-key"></span>
                    確認密碼</label>
                <input 
                value={confirmPasswd}
                onChange={e=>setConfirm(e.target.value)}
                id="passwordagain" 
                type="password" 
                className="custom-input w-full" 
                name="passwd_confirm"/>
            </div>
            <div className="flex justify-between items-center">
                <button type="submit" className="btn btn-primary">註冊</button>
                <div>
                    <p className="mb-0 text-gray-500 inline mr-2">有帳號了?</p>
                    <a href="/login">登入</a>
                </div>
            </div>
            <div className="text-red-400" id="err_msg"><pre>{err}</pre></div>
        </form>
    );
}
const SingUp = () => {
    return (
        <header className="min-h-screen w-full flex justify-center items-center bg-gray-400 p-5">
            <div className="flex flex-wrap bg-blur shadow-xl rounded-lg overflow-hidden w-full max-w-2xl">

                <div className="w-full h-8 md:w-1/2 md:h-auto flex bg-board relative">
                </div>

                <div className="w-full md:w-1/2 flex flex-col p-10">
                    <h1 className="text-3xl font-bold text-center">註冊</h1>
                    <div className="mt-5">
                        <Form />
                    </div>
                </div>



            </div>
        </header>
    )
}
export default SingUp;