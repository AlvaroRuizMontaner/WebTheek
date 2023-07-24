import styles from "../styles/pages/home.module.scss"
function Curriculares (): JSX.Element {
    return(
        <div>
            <p>Aquí se mostrará el perfil en caso de estar logeado, en caso contrario no se posibilta navegar hasta aqui</p>
            <p className={styles.font_secondary}>Quizá a modo de portafolio</p>
        </div>
    )
}

export default Curriculares