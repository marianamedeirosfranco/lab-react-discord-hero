import "./App.css";
import background from "./assets/discord-background.png";
import discordLogo from "./assets/discord-logo-white.png";
import menuIcon from "./assets/menu-icon.png";

function App() {
  return (
    <div className="App">
      <div>
        <nav>
          <img className="logo" src={discordLogo} alt="discord-logo" />
          <img className="menu" src={menuIcon} alt="menu-icon" />
        </nav>

        <h1>IMAGINE A PLACE ...</h1>

        <p>
          ...where you can belong to a school club, a gaming ground, or a
          worldwide art community. Where just you and a handful of friends can
          spend time together. A place that makes it easy to talk every day and
          hang out more often.
        </p>
        <div>
          <a href="/">Download for Mac</a>
          <a href="/">Open Discord in your browser</a>
        </div>
        <img src={background} alt="background-image" />
      </div>
    </div>
  );
}

export default App;
