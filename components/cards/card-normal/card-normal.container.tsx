import { Picture } from "@/components/picture/picture.container";
import styles from "./card-normal.module.scss";

export const CardNormal = (props: CardNormalProps): JSX.Element => {
    const {isZoomable=false, src, description} = props;

    return (
        <section className={`${styles.container} ${isZoomable ? styles.zoom : undefined}`}>
            <div className={styles.content}>
                <div className={styles.content_photo}>
                    <Picture src={src} />
                </div>
                {description && <div className={styles.content_description}>{description}</div>}
            </div>
        </section>
    )
}

interface CardNormalProps {
    isZoomable?: boolean;
    src: string;
    description: string;
}