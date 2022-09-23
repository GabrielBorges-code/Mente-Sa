import Container from "react-bootstrap/Container";

import Footer from "../../../components/Footer";
import ChooseProfessional from "../chooseProfessional";

import { HiChatAlt, HiOutlinePencilAlt, HiUserCircle, HiOutlineLogout } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import styles from "./index.module.css";

import { doc, setDoc, getDoc } from "firebase/firestore";
import { db, auth } from "../../../services/firebase";

import { AuthGoogleContext,} from "../../../contexts/authGoogle"
import { useState, useEffect, useContext } from "react";
import Image from "../../../assets/logo-mente-sa.png";

function ProfileProfessional() {
  const {logout} = useContext(AuthGoogleContext)
  const [users, setUsers] = useState(
    JSON.parse(sessionStorage.getItem("@AuthFirebase:user"))
  );

  const [name, setName] = useState(null);
  const [phone, setPhone] = useState(null);
  const [dateBorn, setDateBorn] = useState(null);
  const [civilState, setCivilState] = useState(null);
  const [genre, setGenre] = useState(null);
  const [street, setStreet] = useState(null);
  const [numberHouse, setNumberHouse] = useState(null);
  const [complement, setComplement] = useState(null);
  const [district, setDistrict] = useState(null);
  const [state, setState] = useState(null);
  const [city, setCity] = useState(null);

  async function searchData() {
    const docRef = doc(db, "PatientePersonal", users.uid);
    const docSnap = await getDoc(docRef);
    const {
      name,
      phone,
      dateBorn,
      civilState,
      genre,
      street,
      numberHouse,
      complement,
      district,
      state,
      city,
    } = docSnap.data();
    setName(name);
    setPhone(phone);
    setDateBorn(dateBorn);
    setCivilState(civilState);
    setGenre(genre);
    setStreet(street);
    setNumberHouse(numberHouse);
    setComplement(complement);
    setDistrict(district);
    setState(state);
    setCity(city);
  }
  useEffect(() => {
    console.log(users);
    searchData();
  }, []);

  function logOut(){
    const request = logout()
    navigate('/login')
    window.location.reload(true);
    
  }

  let navigate = useNavigate();
  const [currentView, setCurrentView] = useState("home");
  
  function handleEditProfile(){
    navigate('/registro/profissional')

  }

  function toSchedule() {
    navigate("/usuario/escolha-profissional");
  }

  function renderButton() {
    if (currentView === "home") {
      return (
        <Container className={`${styles.content} bg-light card`}>
          <h3>Meus Dados</h3>
          <div className="d-flex justify-content-end">
            <button className="mt-2 btn btn-primary">
              <i>
                <HiOutlinePencilAlt />
              </i>
              Editar Perfil
            </button>
          </div>
          {/* name, phone, dateBorn, civilState, genre, street, numberHouse, complement, district, state, city */}
          {/* <p>
            Nome: <b>{name}</b>
          </p>
          <p>
            Telefone: <b>{phone} </b>
          </p>
          <p>
            Data de Nascimento: <b>{dateBorn}</b>
          </p>
          <p>
            Estado Civil: <b>{civilState}</b>
          </p>
          <p>
            Gênero: <b>{genre}</b>
          </p>
          <p>
            Rua: <b>{street} </b>
          </p>
          <p>
            Número: <b>{numberHouse}</b>
          </p>
          <p>
            Complemento: <b>{complement}</b>
          </p>
          <p>
            Distrito: <b>{district}</b>
          </p>
          <p>
            Estado: <b>{state}</b>
          </p>
          <p>
            Cidade: <b>{city}</b>
          </p> */}
        </Container>
      );
    } else if (currentView === "session") {
      return (
        <Container className={`${styles.content} bg-light card`}>
          <div className="d-flex justify-content-end">
            <button className="mt-2 btn btn-primary">
              <i>
                <HiOutlinePencilAlt />
              </i>
              Session
            </button>
          </div>
        </Container>
      );
    } else {
      return (
        <Container className={`${styles.content} bg-light card`}>
          <div>
            <ChooseProfessional />
          </div>
        </Container>
      );
    }
  }

  return (
    <>
      <section className="h-100 gradient-custom-2">
        <div className="">
          <div
            className="text-white d-flex flex-row justify-content-center "
            style={{ backgroundColor: "#5086C1", height: "200px" }}
          >
            <div
              className="ms-4 mt-5 d-flex flex-column  "
              style={{ width: "150px", zIndex: 1 }}
            >
              <img
                src={Image}
                alt="Generic placeholder image"
                className="img-fluid img-thumbnail mt-5  mb-3"
                style={{ width: "150px", zIndex: 1 }}
              />
            </div>
            <div className="ms-4" style={{ marginTop: "100px" }}>
              <p className="  fs-5 fw-bold  text-center">{name}</p>
              <p className="text-wrap text-center lh-1 ">{dateBorn}</p>
              <p className="text-wrap text-center lh-1 ">Contato: {phone}</p>
            </div>
          </div>

          <Container>
            <div className="p-4 text-black">
              <div className="d-flex justify-content-end text-center py-1">
                <div>
                  <button
                    onClick={() => setCurrentView("home")}
                    className={
                      currentView == "home"
                        ? "btn btn-secondary rounded-pill clicked"
                        : "btn btn-primary rounded-pill"
                    }
                  >
                    <i>
                      <HiUserCircle />
                    </i>{" "}
                    Meu Perfil
                  </button>
                </div>
                <div className="px-3">
                  <button
                    onClick={() => setCurrentView("session")}
                    className={
                      currentView == "session"
                        ? "btn btn-secondary rounded-pill clicked"
                        : "btn btn-primary rounded-pill"
                    }
                  >
                    <i>
                      <HiChatAlt />
                    </i>{" "}
                    Sessões
                  </button>
                </div>
                <div className="px-3">
                  <button
                    onClick={() => setCurrentView("schedule")}
                    className={
                      currentView == "schedule"
                        ? "btn btn-secondary rounded-pill clicked"
                        : "btn btn-primary rounded-pill"
                    }
                  >
                    <i>
                      <HiChatAlt />
                    </i>{" "}
                    Agendamento
                  </button>
                </div>
                <div>
                    <button onClick={() => logOut()} className={'btn btn-light rounded-pill'}><i><HiOutlineLogout/></i></button>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </section>

      {renderButton()}
      

      <Footer />
    </>
  );
}

export default ProfileProfessional;
