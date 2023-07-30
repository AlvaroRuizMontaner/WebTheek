import { Dots } from "@/components/sensors/dots/dots.component";
import { CSSProperties, useEffect, useRef, useState } from "react";
import styles from "./slider.module.scss"

export const Slider = (props: SliderProps): JSX.Element => {
    const {children, slidesVisible, contentWidth, slideWidth, gapWidth} = props;
    const [sliderIndex, setSliderIndex] = useState<number>(0);
    const contentRef = useRef<HTMLDivElement>(null);
    const slideRefs = useRef<(HTMLDivElement)[]>([]);
    /* const [gapWidth, setGapWidth] = useState(0); */
    //const [contentWidth, setContentWidth] = useState<number>(0);
    //const [slideWidth, setSlidesWidth] = useState<number>(0);

    useEffect(() => {
        const handleScroll = () => {
            if (!contentRef.current) return;
            const docWidth = document.documentElement.clientWidth

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
                  const gap =  gapWidth * docWidth/100;
        
                  index === 1 && console.log(slideLeftPos, contentScrollPos + gap, index, "gap", gap)
                  if ((slideLeftPos <= (contentScrollPos + gap))) {
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
    slidesVisible: number;
    contentWidth: number;
    slideWidth: number;
    gapWidth: number;
}