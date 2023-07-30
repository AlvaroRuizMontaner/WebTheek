import { Dots } from "@/components/sensors/dots/dots.component";
import { CSSProperties, useEffect, useRef, useState } from "react";
import styles from "./slider.module.scss"

export const Slider = (props: SliderProps): JSX.Element => {
    const {children, contentWidth, slideWidth, gapWidth} = props;
    const [sliderIndex, setSliderIndex] = useState<number>(0);
    const contentRef = useRef<HTMLDivElement>(null);
    const slideRefs = useRef<(HTMLDivElement)[]>([]);
    /* const [gapWidth, setGapWidth] = useState(0); */
    //const [contentWidth, setContentWidth] = useState<number>(0);
    //const [slideWidth, setSlidesWidth] = useState<number>(0);

    useEffect(() => {
        const docWidth = document.documentElement.clientWidth

        const handleScroll = () => {
            if (!contentRef.current) return;

            const snapProportion = 1 - (slideWidth/contentWidth)
            const snapValue = slideWidth * snapProportion
            console.log(snapValue, "snapValue")

            // Valor de scroll en content
            const contentScrollPos = contentRef.current.scrollLeft;
            console.log("contentScrollPos:", contentScrollPos)

            // Comparar valor de scroll con las posiciones de los slides
            let currentIndex = 0;
            slideRefs.current.forEach((slideRef, index) => {
                if (slideRef) {
                  const slideLeftPos = slideRef.offsetLeft;
                  let gap: number;
                  if(index > 0) {
                    if(index !== slideRefs.current.length-1 - 2) {
                        gap = gapWidth * docWidth/100 // Si es una vista intermedia el gap es tamaño normal
                    } else {
                        gap = 2 * gapWidth * docWidth/100 // Si es la ultima vista el gap a considerar es el doble
                    }
                  } else {
                    gap = 0 // En la primera vista el gap del calculo debe ser 0
                  }
                  //const gap = (index > 0 ) ? (index !== slideRefs.current.length-1 - 2 ? gapWidth * docWidth/100 : 2 * gapWidth * docWidth/100) : 0;
        
                  index === 2 && console.log(slideLeftPos,  Math.ceil(contentScrollPos + gap), index, "gap", gap)
                  if ((slideLeftPos <= (Math.ceil(contentScrollPos + gap)))) {
                    currentIndex = index;
                  }
                }
              });
    
            setSliderIndex(currentIndex);
        }
        
        const handleResize = () => {
            if (!contentRef.current) return;
      
            // Obtener el contenedor del slider y su ancho
            //const content = contentRef.current;
            //const contentWidth = content.clientWidth
      
            // Obtener el ancho del primer slide (asumimos que todos los slides tienen el mismo ancho)
            //const firstSlide = slideRefs.current[0];
            //const slideWidth = firstSlide ? firstSlide.offsetWidth : 0;
      
            // Calcular cuántos slides caben en una vista
            //const visibleSlides = Math.floor(contentWidth / slideWidth);
            //setContentWidth(contentWidth);
            //setSlidesWidth(slideWidth);

/*             const gapWidth = (contentWidth - (slidesVisible * slideWidth))/(slidesVisible + 1);
            setGapWidth(gapWidth) */
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
      }, [gapWidth]);

    const moveWithArrow = (ev: React.MouseEvent<HTMLButtonElement>): void => {
        const target = ev.target as HTMLElement;
        const docWidth = document.documentElement.clientWidth
        console.log("push")
       
        if(ev.type === "click") {
            if (!contentRef.current) return;
        }

        let xScrollBy = (slideWidth + gapWidth) * docWidth/100 //(contentRef as any).current.clientWidth / 3;

        if(target.dataset.direction === "back") {
            xScrollBy = xScrollBy * -1;
        }

        const scrollByOptions = {
            left: xScrollBy,
            behavior: "smooth"
        };

        (contentRef as any).current.scrollBy(scrollByOptions)
    }

    const contentStyle = {
        "--gapWidth": `${gapWidth}vw`,
        "--contentWidth": `${contentWidth}vw`,
        "--slideWidth": `${slideWidth}vw`,
    } as CSSProperties

    return (
        <section className={styles.container}>
            <div style={contentStyle} ref={contentRef} className={`${styles.content}`}>
                {/* {Array.isArray(children) ? children.map(child => child) : children} */}
                {Array.isArray(children) ? 
                (children.map((child, index) => <div key={index} ref={(ref) => (slideRefs.current[index] = ref!)} className={styles.content_child}>{child}</div>)) : 
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
    contentWidth: number;
    slideWidth: number;
    gapWidth: number;
}