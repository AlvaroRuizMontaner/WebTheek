import { useRef } from "react";
import styles from "./slider.module.scss"

export const Slider = (props: SliderProps): JSX.Element => {
    const {children} = props;
    const el = useRef<HTMLDivElement>(null);

    const moveIt = (ev: React.MouseEvent<HTMLButtonElement>): void => {
        const target = ev.target as HTMLElement; // Convertir el tipo de ev.target a HTMLElement
       
        if(ev.type === "click") {
            if (!el.current) return;
        }

        let xScrollBy = (el as any).current.clientWidth / 3;

        if(target.dataset.direction === "back") {
            xScrollBy = xScrollBy * -1;
        }

        const scrollByOptions = {
            left: xScrollBy,
            behavior: "smooth"
        };

        (el as any).current.scrollBy(scrollByOptions)
    }

    return (
        <>
            <section ref={el} className={`${styles.container}`}>
                {Array.isArray(children) ? children.map(child => child) : children}
            </section>
            <button onClick={moveIt} data-direction="back">back</button>
            <button onClick={moveIt} data-direction="forward">forward</button>
        </>
    )
}

interface SliderProps {
    children: JSX.Element | JSX.Element[];
}