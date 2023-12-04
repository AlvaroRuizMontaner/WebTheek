/* import { useState } from "react"; */
import styles from "./slick-slider.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { default as SlickSlider, Settings } from "react-slick";

export const Slider = ({ children }: SliderProps): JSX.Element => {
  //const [sliderIndex, setSliderIndex] = useState<number>(0);

  const settings: Settings = {
    dots: true,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    /*     responsive: [
      {
        breakpoint: 1428,
        settings: {
          slidesToShow: children.length < 4 ? children.length : 4,
          dots: true,
        },
      },
      {
        breakpoint: 1032,
        settings: {
          slidesToShow: 2,
          dots: true,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 2,
          dots: true,
        },
      },
    ], */
  };
  return (
    <div className={styles.container}>
      <SlickSlider {...settings}>{children}</SlickSlider>
    </div>
  );
};

interface SliderProps {
  children: JSX.Element[];
}
