import Button from "react-bootstrap/Button";
import Modal from 'react-bootstrap/Modal';


import { AuthGoogleContext, AuthGoogleProvider } from "../../contexts/authGoogle";
//import ModalShowProfile from "./ModalShowProfile";
import ModalCadastroAnamnese from "./ModalCadastroAnamnese";

function ModalSession (props) {
    //const {role1} = useContext(AuthGoogleContext);

    let modal = (
        <ModalCadastroAnamnese {...props}></ModalCadastroAnamnese>
    );

     console.log("PROPS: " + props.show);

    return (
        <>
            {modal}
        </>
    );
}

export default ModalSession;