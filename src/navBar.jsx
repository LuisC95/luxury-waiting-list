import './styles/navBar-styles/navBar.css';

export default function NavBar() {
  return (
    <nav>
      <h2>My Application</h2>
      <ul className="feature-list">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
       <button className="login-button">Get Started</button>
    </nav>
  );
}