import { Link } from "@/components/link";
import styles from "./accordion.module.scss"

export const Accordion = (props: AccordionProps): JSX.Element => {
    const {open, info} = props;
    const mapInfoTSX = info.map((item, index) => (
        <div className={styles.content} key={index}>
            <Link href={item.url}><span className={styles.content__text}>{item.name}</span></Link>
            {item.icon && <span></span>}
        </div>
    ))
    return (
        <section className={`${styles.container} ${open ? styles.open : undefined}`}>
            {mapInfoTSX}
        </section>
    )
}

interface AccordionProps {
    open: boolean;
    info: {
        name: string,
        url: string,
        icon?: string
    }[]
}