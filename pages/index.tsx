import styles from "../styles/pages/home.module.scss"
function Home (): JSX.Element {
    return(
        <div>
            <p>Como va la cosa mariposa</p>
            <p className={styles.font_secondary}>Muy bien jejeje</p>
        </div>
    )
}

export default Home