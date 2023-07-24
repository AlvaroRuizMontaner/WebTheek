import styles from "../styles/pages/home.module.scss"
function Tools (): JSX.Element {
    return(
        <div>
            <p>Esta será la sección recursos web o herramientas, ToolTheek</p>
            <p className={styles.font_secondary}>Algunos requerirán logeo</p>
            <p>Posiblemente se añada al tablon de novedades cualquier actividad aqui realizada</p>
        </div>
    )
}

export default Tools