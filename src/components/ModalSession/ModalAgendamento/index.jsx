import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from 'react-bootstrap/Modal';

import { useNavigate } from "react-router-dom";

import Input from "../../Input";
import InputSelect from "../../Input/inputSelect";

import { useState } from "react";

function ModalAgendamento (props) {
  let navigate = useNavigate();
  const [] = useState();

  return (
    <>
        <Modal
            {...props}
            size="lg"
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
                </Form>
      
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    </>
  );
}

export default ModalAgendamento;
