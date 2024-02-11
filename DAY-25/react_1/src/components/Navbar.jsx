import './style.css';
export const Navbar = () => {
  const nav = ['Home', 'About', 'Contact Us'];
  return (
    <div className="nav-list">
      {nav.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </div>
  );
};

// 3 cara loop

// { //inline setelah arrow tidak muncul
//   nav.map((item) => <p>{item}</p>)
// }

// dengan ()
// { //inline setelah arrow tidak muncul
//   nav.map((item) => (<p>{item}</p>))
// }

// dengan {}
// { //inline setelah arrow tidak muncul
//   nav.map((item) => {
//    return (<p>{item}</p>)
//    })
// }
