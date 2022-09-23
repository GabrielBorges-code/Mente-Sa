import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

import Input from "../../../components/Input";
import InputSelect from "../../../components/Input/inputSelect";

import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import Schedule from "../../../components/Schedule";

import Session from "../session";

import styles from "./index.module.css";
import { useNavigate } from "react-router-dom";
import {
  HiOutlinePencilAlt,
  HiUserCircle,
  HiChatAlt,
  HiOutlineLogout,
} from "react-icons/hi";
import { AuthGoogleContext } from "../../../contexts/authGoogle";
import Image from "../../../assets/icon-mente-sa.jpg";
import { useState, useEffect, useContext } from "react";

import {
  doc,
  setDoc,
  addDoc,
  getDoc,
  collection,
  updateDoc,
} from "firebase/firestore";
import { db, auth } from "../../../services/firebase";

function ProfileProfessional() {
  let navigate = useNavigate();
  const { signInGoogle, role1, signed, formComplete } =
    useContext(AuthGoogleContext);
  let pronoun = "";
  //controll screen
  const [currentView, setCurrentView] = useState("home");
  const [users, setUsers] = useState(
    JSON.parse(sessionStorage.getItem("@AuthFirebase:user"))
  );
  const [name, setName] = useState("");
  const [regionalCouncilNumber, setRegionalCouncilNumber] = useState("");
  const [specializationName, setSpecializationName] = useState("");
  const [professionalDescription, setProfessionalDescription] = useState("");
  const [college, setCollege] = useState("");
  const [dateFinishCollege, setDateFinishCollege] = useState("");
  const [logradouro, setLogradouro] = useState ("");
  const [number, setNumber] = useState ("");
  const [genre, setGenre] = useState("");
  const { logout } = useContext(AuthGoogleContext);


  async function handleEdit() {
    const docPer = doc(db, "Personal", users.uid);
    const docSnapPer = await getDoc(docPer);
    const { name, genre } = docSnapPer.data();

    const docProf = doc(db, "Professional", users.uid);
    const docSnapProf = await getDoc(docProf);
    const {
      college,
      dateFinishCollege,
      regionalCouncilNumber,
      specializationName,
      professionalDescription,
    } = docSnapProf.data();

    const docEnterprise = doc(db, "Enterprise", users.uid);
    const docSnapEnterprise = await getDoc(docEnterprise);
    const { logradouro, number } = docSnapEnterprise.data();

    setName(name);
    setCollege(college);
    setDateFinishCollege(dateFinishCollege);
    setRegionalCouncilNumber(regionalCouncilNumber);
    setSpecializationName(specializationName);
    setProfessionalDescription(professionalDescription);
    setLogradouro(logradouro);
    setNumber(number);
    setGenre(genre);
    // setPronoun(pronoun);
  }

  useEffect(() => {
    // console.log("Olá", name, regionalCouncilNumber)
    handleEdit();
  }, [name, regionalCouncilNumber]);

  function logOut() {
    const request = logout();
    navigate("/login");
    window.location.reload(true);
  }

  function save() {
    //PREPARE TO SAVE
    navigate("/registro/profissional/empresa");
  }
  function handleEditProfile() {
    navigate("/registro/profissional");
  }

  function renderButton() {
    if (currentView === "home") {
      return (
        <Container className={`${styles.min_height} bg-light card mt-1`}>
          <div className="d-flex justify-content-end">
            <button
              onClick={handleEditProfile}
              className="mt-2 btn btn-primary rounded-pill"
            >
              <i className="m-2">
                <HiOutlinePencilAlt />
              </i>
              Editar Perfil
            </button>
          </div>

          <div className="row">
            <h3>Quem sou eu</h3>
            <p className="mb-3">{professionalDescription}</p>
          </div>

          <div className="row">
            <h3>Meus dados profissionais</h3>
            <p>Faculdade: <b>{college}</b></p>
            <p>Ano de conclusão: <b>{dateFinishCollege.slice(0,4)}</b></p>
            <p>Endereço empresarial: <b>{logradouro}</b>, <b>{number}</b></p>
          </div>
        </Container>
      );
    } else if (currentView === "session") {
      return (
        <Container className={`${styles.min_height} bg-light card`}>
          <div>
            <Session />
          </div>
        </Container>
      );
    } else {
      return <Schedule />;
    }
  }

  if (genre === "Feminino") {
    pronoun = "Dra";
  } else {
    pronoun = "Dr";
  }

  return (
    <>
      {/* steper 2 */}

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
              <p className="  fs-5 fw-bold  text-center">
                {pronoun} {name}
              </p>
              <p className="text-wrap text-center lh-1 ">
                {specializationName}
              </p>
              <p className="text-wrap text-center lh-1 ">
                CRP/CRM {regionalCouncilNumber}
              </p>
            </div>
          </div>

          <Container>
            <div className="py-4 text-black">
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
                    Atendimento
                  </button>
                </div>
                <div>
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
                    Agenda
                  </button>
                </div>

                <div>
                  <button
                    onClick={() => logOut()}
                    className={"btn btn-light rounded-pill"}
                  >
                    <i>
                      <HiOutlineLogout />
                    </i>
                  </button>
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
