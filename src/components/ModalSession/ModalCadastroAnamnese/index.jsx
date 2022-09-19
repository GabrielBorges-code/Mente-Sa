import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from 'react-bootstrap/Modal';
import Input from "../../Input";
import InputSelect from "../../Input/inputSelect";
import TextArea from "../../TextArea";

function ModalCadastroAnamnese (props) {

    return (
        <>            
            <Modal
            {...props}
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Cadastro Anamnese
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                        {/* <!-- Anamnese input --> */}
                        <div className="row">
                            <Input type={'date'} typeForm={'form-control'} setClassCol={'col-sm'} label={'Data Atendimento'}/>
                            <Input type={'text'} typeForm={'form-control'}  setClassCol={'col-sm'} label={'Valor'}/>
                            <InputSelect label={'Tipo de Atendimento'} options={['Online','Presencial', 'Ambos']} />
                        </div>
                        <div className="row">
                            <TextArea type={'text'} typeForm={'form-control'} setSizeRow={3} setClassCol={'col-sm'} label={'Queixa Principal'}/>
                        </div>
                        <div className="row">
                            <TextArea type={'text'} typeForm={'form-control'} setSizeRow={3} setClassCol={'col-sm'} label={'Evolucao da Queixa: Como comecou?'}/>
                        </div>
                        <div className="row">
                            <TextArea type={'text'} typeForm={'form-control'} setSizeRow={3} setClassCol={'col-sm'} label={'Foi Repentino ou Gradual?'}/>
                        </div>
                        <div className="row">
                            <TextArea type={'text'} typeForm={'form-control'} setSizeRow={3} setClassCol={'col-sm'} label={'Quais transformacoes ocorreram?'}/>
                        </div>
                        <div className="row">
                            <TextArea type={'text'} typeForm={'form-control'} setSizeRow={3} setClassCol={'col-sm'} label={'Sintomas'}/>
                        </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalCadastroAnamnese;