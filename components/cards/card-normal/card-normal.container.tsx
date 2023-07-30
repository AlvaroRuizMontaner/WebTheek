import styles from "./card-normal.module.scss";

export const CardNormal = (props: CardNormalProps): JSX.Element => {
    const {isZoomable} = props;

    return (
        <section className={`${styles.container} ${isZoomable ? styles.zoom : undefined}`}>
            <div className={styles.content}></div>
        </section>
    )
}

interface CardNormalProps {
    isZoomable: boolean;
}