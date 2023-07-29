import styles from "./dots.module.scss"

export const Dots = ({ length, currentIndex }: DotsProps): JSX.Element => {
    return (
      <div className={styles.dots}>
        {Array(length)
          .fill(0)
          .map((_, index) => (
            <span
              key={index}
              className={`
              ${styles.dot}
              ${currentIndex === index && styles.active}
            `}
            />
          ))}
      </div>
    );
};

interface DotsProps {
    length: number;
    currentIndex: number;
}