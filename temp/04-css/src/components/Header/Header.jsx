import styles from "./Header.module.css";
import Button from "../Button/Button";

const Header = () => {
  return (
    <header className={styles.header}>
        <a href="/" className={styles.logo} aria-label="Home">React App</a>
        <Button onClick={() => alert("Login Button clicked")}>Login</Button>
    </header>
  );
};

export default Header;
