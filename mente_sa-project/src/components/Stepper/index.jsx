import Navbar from "react-bootstrap/Navbar";
import { HiArrowLeft,HiChevronLeft } from "react-icons/hi"
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import styles from "./index.module.css";
import { HiCheck } from "react-icons/hi";

function Stepper({step}) {
  
  

  return (
    <>
      {/* <Navbar className={styles.height}  expand="lg"> */}
      <Container className={``}>
        <div className="position-relative m-4">
            <div className={`${styles.progressB} progress`} >
                <div className={`${styles.bar} progress-bar`} role="progressbar" aria-label="Progress"  aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                <button type="button" className="position-absolute top-0 start-0 translate-middle btn btn-md btn-success rounded-pill" ><i><HiCheck/></i></button>
                <button type="button" className="position-absolute top-0 start-50 translate-middle btn btn-md btn-success rounded-pill" > <i><HiCheck/></i></button>
                <button type="button" className="position-absolute top-0 start-100 translate-middle btn btn-md btn-primary rounded-pill">3</button>
            </div>
            
        </div>
        </Container>
    </>
  );
}

export default Stepper;
