import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from 'react-bootstrap/Modal';

import { useNavigate } from "react-router-dom";

import Input from "../../Input";
import InputSelect from "../../Input/inputSelect";

import { useState } from "react";
import styles from "./index.module.css";

function ModalScheduling (props) {
  let navigate = useNavigate();
  const [] = useState();

  
  const [showModal, setShowModal] = useState(false);  

  function save() {
    //PREPARE TO SAVE
    navigate("/usuario/perfil");
  }

  return (
    <>
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Agendamento
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                <Form.Group className="mb-5">

                    <div className="row">
                        <Input
                        type={"date"}
                        typeForm={"form-control"}
                        setClassCol={"col-sm"}
                        label={"Data"}
                        />
                        <Input
                        type={"time"}
                        typeForm={"form-control"}
                        setClassCol={"col-sm"}
                        label={"Horário"}
                        />

                        <InputSelect
                        label={"Tipo de Atendimento"}
                        options={["Atendimento A", "Atendimento B", "Atendimento C"]}
                        />
                    </div>
                </Form.Group>

                    <div className="row d-flex justify-content-center">
                        <button onClick={save} className="btn btn-lg col-md-3 btn-primary">
                            Concluir
                        </button>
                    </div>
                </Form>
      
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    </>
  );
}

export default ModalScheduling;
