import { useState } from "react";
import ClickAwayListener from "react-click-away-listener";
const DropdownMenu = ({ btn,btnClass, options }) => {
    const [isOpen, setOpen] = useState(false);
    const toggle = () => setOpen(!isOpen);
    return (
        <ClickAwayListener onClickAway={()=>setOpen(false)}>
        <div className="relative">
            <button className={btnClass} onClick={toggle}>
            {btn}
            </button>
            <div className="dropdown" hidden={!isOpen} onClick={toggle}>
            {options}
            </div>
        </div>
        </ClickAwayListener>
    )
};
export default DropdownMenu;