import { NavItem } from "@/components/nav-item/nav-item.component"
import { navInfo } from "./nav.info"
import styles from "./nav.module.scss"

export const Nav = () => {
    const MapNavItem = navInfo.map((item, index) => (
        <li key={index}>
            <NavItem {...item} />
        </li>
    ))

    return (
        <nav className={styles.container}>
            <section className={styles.container__logo}>
                <NavItem name="WebTheek" url="/" />
            </section>
            <ul className={styles.container__nav_items}>
                {MapNavItem}
            </ul>
            <section className={`${styles.container__logo} ${styles.final}`}>
                <NavItem icon="/icons/login.png" name="Login" url="/login" />
            </section>
        </nav>
    )
}