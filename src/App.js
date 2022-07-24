import { BrowserRouter,Routes,Route} from "react-router-dom"
import {SingIn,SingUp,Main} from "./views";
import "./stylesheet/style.css";
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<SingIn/>}/>
                <Route path="/register" element={<SingUp/>}/>
                <Route index element={<Main/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default App;