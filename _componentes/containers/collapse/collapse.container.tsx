import { CSSProperties } from "react";
import styles from "./collapse.module.scss";

export const Collapse = (props: CollapseProps): JSX.Element => {
  const { open, transition, children, height } = props;
  const calculatedHeight = height ? height : children.length * 2 + "em";
  console.log(children.length);

  const style = {
    transition: transition ? transition : undefined,
    "--height": calculatedHeight,
  } as CSSProperties;

  return (
    <section
      style={style}
      className={`${styles.container} ${open ? styles.open : undefined}`}
    >
      {Array.isArray(children) ? children.map((child) => child) : children}
    </section>
  );
};

interface CollapseProps {
  open: boolean;
  transition?: string;
  children: JSX.Element[];
  height?: string;
}
