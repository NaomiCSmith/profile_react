import Hello from "./components/Hello";
import makersLogo from "./assets/Makers-Logo.png";
import "./App.css";
import Profile from "./profile.jsx";

function App() {
  return (
    <>
      <Hello name="World" />
      <img className="logo" src={makersLogo}></img>
      <div>
        <Profile name="Maker's Duck" job="Being a quacky dude" birthdate="Sometime in 2013"/>
      </div>
    </>
  );
}

export default App;
