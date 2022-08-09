import { useState } from "react";
import { useDispatch } from "react-redux";
import { sendMessage } from "../../reducers/userSlice";

const InputBox = () => {
    const [text, setText] = useState("");
    const dispatch = useDispatch();
    const sendMsg = (e) => {
        e.preventDefault();
        dispatch(sendMessage(text));
        setText("");
    }
    return (
        <form className="flex" onSubmit={sendMsg}>
            <button
                className="focus:outline-none bg-transparent border-0 text-gray-600 hover:text-gray-700 text-2xl mdi mdi-sticker-emoji px-2"></button>
            <button
                className="focus:outline-none bg-transparent border-0 text-gray-600 hover:text-gray-700 text-2xl mdi mdi-image px-2"></button>
            <input
                value={text}
                onChange={e => setText(e.target.value)}
                type="text"
                className='custom-input mx-2'
                style={{ width: "calc(100% - 164px)" }}
                placeholder="輸入文字" required />
            <button type="submit" className="btn btn-success mdi mdi-send ml-2"></button>
        </form>
    );
}
export default InputBox;