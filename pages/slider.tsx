import { Slider as SlickSlider } from "@/_componentes/containers/slick-slider/slick-slider.container";
import { CardNormal } from "@/_componentes/components/cards/card-normal/card-normal.container";
import { info } from "@/_componentes/components/cards/card-normal/card-normal.info";

function Imagenes(): JSX.Element {
  /* const settings = {
    slideWidth: 28,
    contentWidth: 95,
    slidesVisible: 3,
  };
  const gapWidth =
    (settings.contentWidth - settings.slidesVisible * settings.slideWidth) /
    (settings.slidesVisible + 1); */

  return (
    <div>
      <SlickSlider>
        {info.map((item, index) => (
          <CardNormal
            key={index}
            description={item.description}
            src={item.src}
          />
        ))}
      </SlickSlider>
    </div>
  );
}

export default Imagenes;
