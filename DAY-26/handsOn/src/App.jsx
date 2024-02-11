import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Button from "./components/Button";
import { useState } from "react";

function App() {
    const [hover, setHover] = useState("hover");
    const [showCard, setShowCard] = useState(false);
    const [data, setData] = useState([
        {
            name: "dews",
            age: "18",
            address: "jl Pegangsaan Timur no 54",
        },
        {
            name: "jiwa",
            age: "20",
            address: "jl Ahkmad Saleh 004",
        },
        {
            name: "dews",
            age: "26",
            address: "jl Pangeran Diponegoro 64",
        },
    ]);

    const handleShowCard = () => {
        setShowCard(!showCard);
    };

    return (
        <div>
            <Navbar hover={hover} />
            <Button handleShowCard={handleShowCard} />
            {showCard &&
                data.map((item, index) => <Card item={item} key={index} />)}
        </div>
    );
}

export default App;
