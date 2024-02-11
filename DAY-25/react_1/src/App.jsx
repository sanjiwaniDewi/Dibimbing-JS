// function App() {

// }

import { Navbar } from './components/Navbar';
import Banner from './components/Banner';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  //how to render js
  // const name = "sanji";
  // const isSingle = true;

  // const renderStatus = (status) => {
  //     if (status) {
  //         return <p>i am single</p>;
  //     }

  //     return <p>i am not single</p>;
  // };

  // const number = 5;

  // const renderNumber = (number) => {
  //     let note = "";
  //     for (let index = 0; index < number; index++) {
  //         note += `${index} \n`;
  //     }
  //     return note;
  // };

  return (
    <div className="container">
      <Navbar />
      <Banner />
      <Footer />
      {/* <h1>haloww I am {name}</h1>
            {isSingle ? <p>i am single</p> : <p>i am not single</p>}

            {renderStatus(isSingle)}
            {renderNumber(number)} */}
    </div>
  );
};

// export const App2 = () => {
//     return <p>heloww</p>;
// };

// export const App3 = () => {
//     return <p>test</p>;
// };

export default App;
