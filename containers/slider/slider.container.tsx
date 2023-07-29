import { Dots } from "@/components/sensors/dots/dots.component";
import { useEffect, useRef, useState } from "react";
import styles from "./slider.module.scss"

export const Slider = (props: SliderProps): JSX.Element => {
    const {children} = props;
    const [sliderIndex, setSliderIndex] = useState<number>(0);
    const contentRef = useRef<HTMLDivElement>(null);
    const slideRefs = useRef<(HTMLDivElement)[]>([]);
    const [slidesVisible, setSlidesVisible] = useState<number>(0);

    useEffect(() => {
        const handleScroll = () => {
            if (!contentRef.current) return;

            // Obtener el contenedor del slider y su ancho
            const content = contentRef.current;
            const containerWidth = content.clientWidth;

            // Obtener la posición del scroll en el contenedor del slider
            const contentScrollPos = content.scrollLeft;
      
            // Comparar la posición del scroll con las posiciones de los slides
            let currentIndex = 0;
            slideRefs.current.forEach((slideRef, index) => {
                if (slideRef) {
                  const slideLeftPos = slideRef.offsetLeft;
                  const gap = 2.5 * parseFloat(getComputedStyle(content).fontSize); // Convertir el gap de rem a px
        
                  index === 0 && console.log(slideLeftPos, contentScrollPos + gap, index)
                  if ((slideLeftPos <= (contentScrollPos + gap))) {
                    console.log("lol")
                    currentIndex = index;
                  }
                }
              });
    
            setSliderIndex(currentIndex);
        }
        const handleResize = () => {
            if (!contentRef.current) return;
      
            // Obtener el contenedor del slider y su ancho
            const container = contentRef.current;
            const containerWidth = container.clientWidth - 32; // 32 viene de 1rem
      
            // Obtener el ancho del primer slide (asumimos que todos los slides tienen el mismo ancho)
            const firstSlide = slideRefs.current[0];
            const slideWidth = firstSlide ? firstSlide.offsetWidth : 0;
      
            // Calcular cuántos slides caben en una vista
            const visibleSlides = Math.floor(containerWidth / slideWidth);
            console.log(visibleSlides)
            setSlidesVisible(visibleSlides);
          };
    
        const content = contentRef.current;
        if (!content) return

        handleResize();
    
        content.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleResize);
    
        return () => {
          // Eliminar el evento al desmontar el componente
          (content as any).removeEventListener("scroll", handleScroll);
        };
      }, []);

    const moveWithArrow = (ev: React.MouseEvent<HTMLButtonElement>): void => {
        const target = ev.target as HTMLElement;
       
        if(ev.type === "click") {
            if (!contentRef.current) return;
        }

        let xScrollBy = (contentRef as any).current.clientWidth / 3;

        if(target.dataset.direction === "back") {
            xScrollBy = xScrollBy * -1;
        }

        const scrollByOptions = {
            left: xScrollBy,
            behavior: "smooth"
        };

        (contentRef as any).current.scrollBy(scrollByOptions)
    }

    return (
        <section className={styles.container}>
            <div ref={contentRef} className={`${styles.content}`}>
                {/* {Array.isArray(children) ? children.map(child => child) : children} */}
                {Array.isArray(children) ? 
                (children.map((child, index) => <div ref={(ref) => (slideRefs.current[index] = ref!)} className={styles.content_child}>{child}</div>)) : 
                (<div className={styles.content_child}>{children}</div>)}
            </div>
            <div className={styles.dots}>
                <Dots length={Array.isArray(children) ? children.length-2 : 1} currentIndex={sliderIndex}/>
            </div>
            <button className={styles.button_back} onClick={moveWithArrow} data-direction="back"></button>
            <button className={styles.button_forward} onClick={moveWithArrow} data-direction="forward"></button>
        </section>
    )
}

interface SliderProps {
    children: JSX.Element | JSX.Element[];
}