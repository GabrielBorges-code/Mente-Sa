import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';

import styles from './index.module.css'

function Home() {
  return (
    <>
      <Container className={styles.min_height}>
        <Link to="/registro-profissional">registro-profissional</Link>
      </Container>
    </>
  );
}

export default Home;
