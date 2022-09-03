import Navbar from "react-bootstrap/Navbar";

import styles from "./Index.module.css";

function Header() {
  return (
    <>
      <Navbar className={styles.height} bg="primary" expand="lg">
        <h2 className="text-light">Olá profissional, queremos te conhecer!</h2>
      </Navbar>
    </>
  );
}

export default Header;
