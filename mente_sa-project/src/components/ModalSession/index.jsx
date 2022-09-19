import { useContext } from "react";

import Button from "react-bootstrap/Button";
import Modal from 'react-bootstrap/Modal';
import Form from "react-bootstrap/Form";


import { AuthGoogleContext, AuthGoogleProvider } from "../../contexts/authGoogle";
import ModalShowProfile from "./ModalShowProfile";
import ModalCadastroAnamnese from "./ModalCadastroAnamnese";

function ModalSession (props) {
    //const {role1} = useContext(AuthGoogleContext);

    let modal = (
        <ModalCadastroAnamnese></ModalCadastroAnamnese>
    );

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
                    Modal heading
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {modal}
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalSession;