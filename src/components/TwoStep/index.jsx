import Container from "react-bootstrap/Container";
import { HiCheck } from "react-icons/hi";
import styles from "./index.module.css";

function Stepper({ step, state1, state2 }) {
  // const [icon, setIcon] = useState(false)

  return (
    <>
      <Container className={`${styles.progressWrapper} `}>
        <div className="position-relative m-4">
          <div
            style={{ width: step }}
            className={`${styles.progressB} progress  `}
          >
            <div
              className={`${styles.bar} progress-bar `}
              role="progressbar"
              aria-label="Progress"
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
            <button
              type="button"
              style={{ height: "4rem", width: "4rem" }}
              className={`position-absolute top-0 start-0 translate-middle btn btn-md btn-${state1} rounded-pill`}
            >
              {state1 == "success" ? (
                <i>
                  <HiCheck />{" "}
                </i>
              ) : (
                1
              )}
            </button>
            <button
              type="button"
              style={{ height: "4rem", width: "4rem" }}
              className={`position-absolute top-0 start-100 translate-middle btn btn-md btn-${state2} rounded-pill`}
            >
              {" "}
              {state2 == "success" ? (
                <i>
                  <HiCheck />{" "}
                </i>
              ) : (
                2
              )}
            </button>
            
          </div>
        </div>
      </Container>
    </>
  );
}

export default Stepper;
