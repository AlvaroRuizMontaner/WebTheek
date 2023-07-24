import styles from "../styles/pages/home.module.scss"
function Imagenes (): JSX.Element {
    return(
        <div>
            <p>Aquí se mostrarán los contactos que hayamos añadido</p>
            <p className={styles.font_secondary}>Podremos ver su perfil y sus novedades</p>
        </div>
    )
}

export default Imagenes