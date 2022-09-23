import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from 'react-bootstrap/Modal';
import Input from "../../Input";
import InputSelect from "../../Input/inputSelect";
import TextArea from "../../TextArea";

import { useState, useEffect } from "react";

function ModalCadastroAnamnese (props) {
    const [fdateService, setDateService] = useState('')
    const [fprice, setPrice] = useState('')
    const [ftypeService, setTypeService] = useState('')
    const [fcomplaint, setComplaint] = useState('')
    const [fevolutionComplaint, setEvolutionComplaint] = useState('')
    const [ftypeComplaint, setTypeComplaint] = useState('')
    const [ftransformationComplaint, setTransformationComplaint] = useState('')
    const [fsymptoms, setSymptoms] = useState('')
    //console.log(props);

    useEffect(() => {
        props.setAnamnese({
            fdateService,
            fprice,
            ftypeService,
            fcomplaint,
            fevolutionComplaint,
            ftypeComplaint,
            ftransformationComplaint,
            fsymptoms
        });
    }, [fdateService, fprice, ftypeService, fcomplaint, fevolutionComplaint,
        ftypeComplaint, ftransformationComplaint, fsymptoms,
        props.setFormAnamnese]);


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
                    <Form>
                        {/* <!-- Anamnese input --> */}
                        <div className="row">
                            <Input type={'date'} typeForm={'form-control'} value={fdateService} setValue={setDateService} setClassCol={'col-sm'} label={'Data Atendimento'}/>
                            <Input type={'text'} typeForm={'form-control'} value={fprice} setValue={setPrice} setClassCol={'col-sm'} label={'Valor'}/>
                            <InputSelect label={'Tipo de Atendimento'} value={ftypeService} setValue={setTypeService} options={['Online','Presencial', 'Ambos']} />
                        </div>
                        <div className="row"> 
                            <TextArea type={'text'} typeForm={'form-control'} setSizeRow={3} setClassCol={'col-sm'} name="fcomplaint" value={fcomplaint} setValue={setComplaint} label={'Queixa Principal'}/>
                        </div>
                        <div className="row">
                            <TextArea type={'text'} typeForm={'form-control'} setSizeRow={3} setClassCol={'col-sm'} name="fevolutionComplaint" value={fevolutionComplaint} setValue={setEvolutionComplaint} label={'Evolucao da Queixa: Como comecou?'}/>
                        </div>
                        <div className="row">
                            <TextArea type={'text'} typeForm={'form-control'} setSizeRow={3} setClassCol={'col-sm'} name="ftypeComplaint" value={ftypeComplaint} setValue={setTypeComplaint} label={'Foi Repentino ou Gradual?'}/>
                        </div>
                        <div className="row">
                            <TextArea type={'text'} typeForm={'form-control'} setSizeRow={3} setClassCol={'col-sm'} name="ftransformationComplaint" value={ftransformationComplaint} setValue={setTransformationComplaint} label={'Quais transformacoes ocorreram?'}/>
                        </div> 
                        <div className="row">
                            <TextArea type={'text'} typeForm={'form-control'} setSizeRow={3} setClassCol={'col-sm'} name="fsymptoms" value={fsymptoms} setValue={setSymptoms} label={'Sintomas'}/>
                        </div>

                        <div className="row">
                            <Button onClick={props.onSave}>Salvar</Button>
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

export default ModalCadastroAnamnese;