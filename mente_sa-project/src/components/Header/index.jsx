import Navbar from "react-bootstrap/Navbar";
import { HiArrowLeft } from "react-icons/hi"

import styles from "./Index.module.css";

function Header({message}) {
  return (
    <>
      <Navbar className={styles.height}  expand="lg">
        <div className="main">
          <div>
            <div><i><HiArrowLeft/></i></div>
          </div>
          <div>
            <h2 className="text-light">{message}</h2>
          </div>
        </div>
      </Navbar>
    </>
  );
}

export default Header;
