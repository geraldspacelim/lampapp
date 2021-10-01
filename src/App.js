import './App.css';

function App() {
  return (
    <div className="hero">
      <nav>
        <img src="./assets/menu.png" className="menu-img"/>
        <img src="./assets/logo.png" className="logo"/>
        <ul>
          <li><a href="">Latest</a></li>
          <li><a href="">Modern</a></li>
          <li><a href="">Contemporary</a></li>
          <li><a href="">Affordable</a></li>
        </ul>
        <button type="button">Click here</button>
      </nav>
    </div>
  );
}

export default App;
