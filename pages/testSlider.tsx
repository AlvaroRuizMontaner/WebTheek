import { CardNormal } from "@/_componentes/components/cards/card-normal/card-normal.container";
import { info } from "@/_componentes/components/cards/card-normal/card-normal.info";
import { Slider } from "@/_componentes/containers/slider/slider.container";
import styles from "../styles/pages/home.module.scss";
function Home(): JSX.Element {
  const settings = {
    slideWidth: 28,
    contentWidth: 95,
    slidesVisible: 3,
  };
  const gapWidth =
    (settings.contentWidth - settings.slidesVisible * settings.slideWidth) /
    (settings.slidesVisible + 1);
  console.log(gapWidth);
  return (
    <div>
      <p>Lo que ira en la home si que no lo tengo claro aun</p>
      <p className={styles.font_secondary}>Ya veremos</p>
      <br />
      <br />
      <br />
      <Slider gapWidth={gapWidth} {...settings}>
        {info.map((item, index) => (
          <CardNormal
            key={index}
            description={item.description}
            src={item.src}
          />
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
  );
}

/* 

Generador de firmas de correo electrónico: Una herramienta que permita a los usuarios crear firmas de correo electrónico personalizadas con información de contacto, enlaces a redes sociales y más.
Calculadoras y conversores: Ofrecer una variedad de calculadoras y conversores en línea, como calculadoras de préstamos, conversores de moneda, calculadoras de calorías, etc.
Creador de logotipos: Una herramienta que permita a los usuarios diseñar logotipos personalizados para sus empresas o proyectos.
Biblioteca de iconos y recursos gráficos: Proporcionar una colección de iconos, imágenes y gráficos gratuitos que los usuarios puedan utilizar en sus proyectos.
Generador de tarjetas de visita: Una herramienta para crear diseños personalizados de tarjetas de visita para empresas o profesionales.
Generador de contraseñas seguras: Permitir a los usuarios crear contraseñas seguras y generar combinaciones únicas para proteger sus cuentas en línea.
Editor de fotos en línea: Ofrecer herramientas básicas de edición de fotos, como recorte, ajuste de brillo y contraste, filtros, etc.
Planificador de tareas y proyectos: Proporcionar una herramienta para organizar y planificar tareas y proyectos, con opciones de seguimiento y recordatorios.
Creador de presentaciones: Permitir a los usuarios crear presentaciones profesionales con diapositivas, imágenes y contenido personalizado.
Generador de nombres de empresas o dominios: Ayudar a los usuarios a encontrar nombres creativos para sus empresas o nombres de dominio disponibles.


Las secciones que mencionas, de recursos curriculares y recursos de edición de imágenes, suenan muy útiles y pueden ser una buena base para comenzar.
*/

export default Home;
