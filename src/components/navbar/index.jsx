import styles from "./index.module.css";

function NavBar() {
  return (
    <>
      <nav className={`${styles.content}  `}>
        <div className="main">
          <div className={styles.dropdown}></div>

          <div className={styles.perfil}>
            <div className={styles.imgProfile}>
              <img
                src="https://blog.unyleya.edu.br/wp-content/uploads/2017/12/saiba-como-a-educacao-ajuda-voce-a-ser-uma-pessoa-melhor.jpeg"
                alt="Imagem do perfil"
              />
            </div>

            <h3 className="nameProfile">Natalia Assunção Faccin</h3>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
