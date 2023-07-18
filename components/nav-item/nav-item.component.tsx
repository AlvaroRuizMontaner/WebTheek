import { Link } from "../link";
import styles from "./nav-item.module.scss"
export const NavItem = (props: NavItemProps): JSX.Element => {
    const {name, url, icon, width} = props

    const iconTSX = icon ? <span className={styles.image}><img width={"30px"} height={"30px"} alt={`icon ${icon}`} src={icon}/></span> : ""
    return (
        <section className={`${styles.container} ${width ? styles.width : undefined}`}>
            <div className={styles.content}>
                <Link href={url}>
                    <div className={styles.content__link}>
                        {iconTSX}
                        <span>{name}</span>
                    </div>
                </Link>
            </div>
        </section>
    )
}

interface NavItemProps {
    name: string;
    url: string;
    icon?: string;
    width?: string;
}