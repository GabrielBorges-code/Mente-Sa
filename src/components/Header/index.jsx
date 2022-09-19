import Navbar from "react-bootstrap/Navbar";
import { HiArrowLeft,HiChevronLeft } from "react-icons/hi"
import { useNavigate } from "react-router-dom";

import styles from "./index.module.css";

function Header({message, linkBack}) {
  let navigate = useNavigate()
  function backPage() {
    navigate(linkBack)

  }

  return (
    <>
      {/* <Navbar className={styles.height}  expand="lg"> */}
      <nav className={`${styles.height}  `} >
        <div className="main">
          <div>
            {/* <div className={`${styles.buttonBack}`}><i><HiChevronLeft/></i></div> */}
            <button onClick={backPage} className={`${styles.buttonBack}`}><i><HiChevronLeft/></i></button>
          </div>
          <div className={`${styles.title}`} >
            <h2 className="text-light">{message}</h2>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
