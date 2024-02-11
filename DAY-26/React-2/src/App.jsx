/* eslint-disable no-unused-vars */
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Personalinfo from "./components/Personalinfo";
import Button from "./components/Button";
import Card from "./components/Card";

const App = () => {
    const [sidebar, setSidebar] = useState(false);
    // const [count, setCount] = useState(() => add());
    const [age, setAge] = useState(26);
    const [data, setData] = useState([
        {
            title: "title one",
            description:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti unde voluptates non esse? Laboriosam saepe dolor recusandae. Esse odio rerum possimus. At nemo, dolorem facilis nesciunt culpa officiis commodi architecto?",
        },
        {
            title: "title two",
            description:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti unde voluptates non esse? Laboriosam saepe dolor recusandae. Esse odio rerum possimus. At nemo, dolorem facilis nesciunt culpa officiis commodi architecto?",
        },
        {
            title: "title three",
            description:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti unde voluptates non esse? Laboriosam saepe dolor recusandae. Esse odio rerum possimus. At nemo, dolorem facilis nesciunt culpa officiis commodi architecto?",
        },
    ]);

    const handleSidebar = () => {
        // jika side bar true dia akan false dan sebaliknya
        setSidebar(!sidebar);
    };

    //coba mengubah fungsi mengunakan usestate
    // const add = () => {

    //   };

    return (
        // <div>
        //     <h1>haiii semua</h1>
        //     <p>umur saya adalah {age}</p>
        //     <button onClick={handleAge}>{age}</button>
        //     {/* tidak direkomendasikan  karena dia tidak readable */}
        //     <button onClick={() => setAge(age + 1)}>{age}</button>
        // </div>

        <div>
            <Button handleSidebar={handleSidebar} />
            {/* and oprator */}
            {sidebar && <Sidebar />}

            {/* ternery */}
            {/* {sidebar ? (
                <div>
                    <p>Carier</p>
                    <p>FnQ</p>
                </div>
            ) : null} */}

            {/* learn about props  */}

            <Personalinfo age={age} />

            {data.map((item, index) => (
                <Card
                    title={item.title}
                    desc={item.description}
                    key={item.index}
                />
            ))}
        </div>
    );
};

export default App;
