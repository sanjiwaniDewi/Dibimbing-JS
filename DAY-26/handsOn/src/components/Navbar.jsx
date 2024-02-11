import { useState } from "react";
import "./navbar.css";

const Navbar = (props) => {
    const [name, setName] = useState("nav");

    function handlOneHover() {
        if (!name.includes(props.hover)) {
            setName(name + ` ${props.hover}`);
        }
    }
    function handleOffHover() {
        if (name.includes(props.hover)) {
            setName(name.replace(props.hover, ""));
        }
    }

    return (
        <div
            className={name}
            onMouseOver={handlOneHover}
            onMouseLeave={handleOffHover}
        >
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    );
};
export default Navbar;
