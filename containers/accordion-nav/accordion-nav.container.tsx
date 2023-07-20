import { Link } from "@/components/link";
import { Collapse } from "../collapse/collapse.container";
import styles from "./accordion-nav.module.scss"

export const AccordionNav = (props: AccordionNavProps): JSX.Element => {
    const {open, info} = props;
    const mapInfoTSX = info.map((item, index) => (
        <div className={styles.content} key={index}>
            <Link href={item.url}><span className={styles.content__text}>{item.name}</span></Link>
            {/* {item.icon && <span></span>} */}
        </div>
    ))
    return (
        <section className={`${styles.container} ${open ? styles.open : undefined}`}>
            <Collapse height="40vh" open={open}>
                {mapInfoTSX}
            </Collapse>
        </section>
    )
}

interface AccordionNavProps {
    open: boolean;
    info: {
        name: string,
        url: string,
        icon?: string
    }[]
}