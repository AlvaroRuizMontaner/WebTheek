import styles from "./flex-builder.module.scss";

export const FlexBuilder = ({
  info,
  ...options
}: FlexBuilderProps): JSX.Element => {
  const { background = "transparent", itemWidth = "fit content" } = options;

  function SecondLevel(item: string, index: number): JSX.Element {
    return (
      <span style={{ width: itemWidth }} key={index}>
        {item}
      </span>
    );
  }

  function firstLevel(item: string[] | string, index: number): JSX.Element {
    if (Array.isArray(item)) {
      return (
        <div key={index} className="fxc fx-spb g1">
          {item.map(SecondLevel)}
        </div>
      );
    } else {
      return (
        <span style={{ width: itemWidth }} key={index}>
          {item}
        </span>
      );
    }
  }

  const contentTSX = (
    <div className={`${styles.content} pd-g1 fx-cc`}>
      {info.map(firstLevel)}
    </div>
  );

  return (
    <section style={{ background: background }} className={styles.container}>
      {contentTSX}
    </section>
  );
};

type FlexBuilderProps = FlexBuilderInfo & Options;

interface FlexBuilderInfo {
  info: string[][] | string[];
  options?: Options;
}

interface Options {
  background?: string;
  itemWidth?: string;
}
