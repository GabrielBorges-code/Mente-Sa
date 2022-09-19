import { Form } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from 'react-bootstrap/Modal';
import Input from "../../Input";

function ModalCadastroAnamnese (props) {

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
                        Cadastro Anamnese
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                   MODAL TESTE PORRA
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalCadastroAnamnese;