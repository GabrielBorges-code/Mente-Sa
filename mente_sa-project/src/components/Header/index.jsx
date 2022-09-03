import Navbar from "react-bootstrap/Navbar";

import styles from "./Index.module.css";

function Header({mensage}) {
  return (
    <>
      <Navbar className={styles.height}  expand="lg">
        <h2 className="text-light">{mensage}</h2>
      </Navbar>
    </>
  );
}

export default Header;
