import styles from "./container.module.scss";

export const Container = ({ children }: ContainerProps): JSX.Element => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}

interface ContainerProps {
  children: JSX.Element | JSX.Element[] | string;
}