import { CardNormal } from "@/components/cards/card-normal/card-normal.container"
import { info } from "@/components/cards/card-normal/card-normal.info"
import { Slider } from "@/containers/slider/slider.container"
function Imagenes (): JSX.Element {

    const settings = {
        slideWidth: 28,
        contentWidth: 95,
        slidesVisible: 3
    }
    const gapWidth =(settings.contentWidth - (settings.slidesVisible * settings.slideWidth))/(settings.slidesVisible + 1);

    return(
        <div>
            <p>Aquí se mostrarán los recursos destinados a editar imagenes, https://icons8.com/ es un sitio interesante por cierto</p>
            <br />
            <br />
            <br />
            <Slider gapWidth={gapWidth} {...settings}>
                {info.map((item, index) => (
                    <CardNormal key={index} description={item.description} src={item.src}/>
                ))}
{/*                 <p>A</p>
                <p>B</p>
                <p>C</p>
                <p>D</p>
                <p>E</p>
                <p>F</p>
                <p>D</p>
                <p>E</p>
                <p>F</p>
                <p>D</p>
                <p>E</p>
                <p>F</p> */}
            </Slider>
        </div>
    )
}

export default Imagenes