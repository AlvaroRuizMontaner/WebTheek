import Image from "next/image";
import styles from "./picture.module.scss";

export const Picture = ({
  src,
  href,
  ratio,
  objectFit = "cover",
  objectPosition,
}: PictureProps): JSX.Element => {
  const paddingBottom = ratio ? `${(1 / ratio) * 100}%` : undefined;

  const regex = /\/([^/]+)\.(?:png|jpe?g|gif|svg|webp)$/i;
  const parts = src.split(regex);
  const altMsg = parts[parts.length - 2];

  const style = {
    backgroundImage: href,
    backgroundSize: "cover",
    backgroundPosition: objectPosition,
    paddingBottom: paddingBottom,
    width: "100%",
  };

  const ImageSettings = {
    src: src,
    layout: "fill",
    objectFit: objectFit,
    objectPosition: objectPosition,
    alt: altMsg,
  };

  return (
    <div style={style} className={styles.container}>
      {href ? <div style={style} /> : <Image {...ImageSettings} />}
    </div>
  );
};

interface PictureProps {
  src: string;
  ratio?: number; // Aspect ratio como un valor numérico
  href?: string;
  objectFit?: "contain" | "cover";
  objectPosition?: string;
}
