import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";

import Input from "../../components/Input";

import Footer from "../../components/Footer";
import Header from "../../components/Header";

import { useState } from "react";
import styles from "./index.module.css";

function Login() {

  let navigate = useNavigate();
  const [] = useState();

  function login() {
    navigate("/usuario/perfil");
  }

  return (
    <>
      <Header message={"Vamos agendar uma consulta!"} linkBack={"/"} />
     
      <Container className={`${styles.content} bg-light card col-sm-5`}>
        <Form>
          <Form.Group className="mb-5">
            <h3>Login</h3>
            <br/>
            <div className="row">
            <Input
                type={"email"}
                typeForm={"form-control"}
                setClassCol={"col-sm"}
                label={"E-mail"}
                required="required"
              />
            </div>
            
            <div className="row">
              <Input
                type={"password"}
                typeForm={"form-control"}
                setClassCol={"col-sm"}
                label={"Senha"}
                required="required"
              />
             
            </div>
          
          </Form.Group>

          <div className={`row  ${styles.divBtnAccess}`}>
            <Link to="#">Esqueceu a senha?</Link>
            <button onSubmit={login} className="btn btn-lg col-md-3 btn-primary">
              Login
            </button>
          </div>

          <div className={`row ${styles.forget_pass}`}>
            <p>Não tem conta? <Link to="/registro/usuario/">Registre-se</Link></p>

          </div>

        </Form>
      </Container>

      <Footer />
    </>
  );
}

export default Login;
