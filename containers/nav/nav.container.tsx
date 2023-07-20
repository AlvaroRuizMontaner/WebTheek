import { Link } from "@/components/link"
import { NavItem } from "@/components/nav-item/nav-item.component"
import { useState } from "react"
import { Accordion } from "../accordion-nav/accordion-nav.container"
import { Collapse } from "../collapse/collapse.container"
import { navInfo } from "./nav.info"
import styles from "./nav.module.scss"

export const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const MapNavItem = navInfo.map((item, index) => (
        <li key={index}>
            <NavItem {...item} />
        </li>
    ))

    return (
        <nav className={styles.container}>
            <section className={styles.content_desktop}>
                <NavItem name="WebTheek" url="/" />
                <ul className={styles.container__nav_items}>
                    {MapNavItem}
                </ul>
            </section>
            <section className={styles.content_mobile}>
                <button onClick={() => {setIsOpen((prev) => !prev)}}><img src="/icons/menu.png" alt="" /></button>
                <div className={styles.accordion}>
                    {/* <Accordion open={isOpen} info={navInfo} /> */}
                    <Collapse height="40vh" open={isOpen}>
                        {navInfo.map((item, index) => (
                                <div className={styles.content} key={index}>
                                    <Link href={item.url}><span className={styles.content__text}>{item.name}</span></Link>
                                    {item.icon && <span></span>}
                                </div>
                            ))}
                    </Collapse>
                </div>
            </section>
            <NavItem icon="/icons/login.png" name="Login" url="/login" />
        </nav>
    )
}