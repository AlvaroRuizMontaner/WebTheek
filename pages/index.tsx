import { Collapse } from "@/containers/collapse/collapse.container"
import { useState } from "react"
import styles from "../styles/pages/home.module.scss"
function Home (): JSX.Element {
    const [isOpen, setIsOpen] = useState(false)
    return(
        <div>
            <p>Como va la cosa mariposa</p>
            <p className={styles.font_secondary}>Muy bien jejeje</p>
            <button onClick={() => {setIsOpen(prev => !prev); console.log(isOpen)}}>click me</button>
            <Collapse open={isOpen}>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
            </Collapse>
        </div>
    )
}

export default Home