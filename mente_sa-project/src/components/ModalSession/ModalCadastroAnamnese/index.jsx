import Button from "react-bootstrap/Button";
import Modal from 'react-bootstrap/Modal';
import Form from "react-bootstrap/Form";

function ModalCadastroAnamnese () {
    return (
        <>
            <Form.Group className="mb-5" >
                <div className="row">
                    <Input type={'number'} typeForm={'form-control'} setClassCol={'col-sm'} label={'Valor da Sessão'}/>
                    <Input type={'number'} typeForm={'form-control'} setClassCol={'col-sm'} label={'Duração da Sessão'}/>
                    <InputSelect label={'Tipo de Atendimento'} options={['ONLINE','PRESENCIAL', 'ONLINE E PRESENCIAL']} />
                </div>            
            </Form.Group>
        </>
    );
}

export default ModalCadastroAnamnese;