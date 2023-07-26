import { useEffect, useRef, useState } from "react";
import styles from "./slider.module.scss"

export const Slider = (props: SliderProps): JSX.Element => {
    const {children} = props;
    const el = useRef<HTMLDivElement>(null);
    const [horizontalScroll, setHorizontalScroll] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
          const container = el.current;
          console.log((container as any).scrollLeft)
          setHorizontalScroll((container as any).scrollLeft);
        };
    
        const container = el.current;
    
        // Escuchar el evento de desplazamiento (scroll) del contenedor
        (container as any).addEventListener("scroll", handleScroll);
    
        return () => {
          // Eliminar el evento al desmontar el componente
          (container as any).removeEventListener("scroll", handleScroll);
        };
      }, []);

    const moveIt = (ev: React.MouseEvent<HTMLButtonElement>): void => {
        const target = ev.target as HTMLElement;
       
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
        <section className={styles.container}>
            <div ref={el} className={`${styles.content}`}>
                {Array.isArray(children) ? children.map(child => child) : children}
            </div>
            <button className={styles.button_back} onClick={moveIt} data-direction="back"></button>
            <button className={styles.button_forward} onClick={moveIt} data-direction="forward"></button>
        </section>
    )
}

interface SliderProps {
    children: JSX.Element | JSX.Element[];
}