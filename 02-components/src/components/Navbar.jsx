import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">My Website</div>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#profile">Profile</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;