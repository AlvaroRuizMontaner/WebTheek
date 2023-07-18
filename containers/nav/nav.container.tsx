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
            <NavItem name="WebTheek" url="/" />
            <ul className={styles.container__nav_items}>
                {MapNavItem}
            </ul>
            <NavItem icon="/icons/login.png" name="Login" url="/login" />
        </nav>
    )
}