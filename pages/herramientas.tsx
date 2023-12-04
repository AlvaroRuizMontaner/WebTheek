import { FlexBuilder } from "@/builders/flex-builder/flex-builder.component";

function Tools(): JSX.Element {
  //const infoLevel1 = ["hola", "esto es la info facilita", "asique no habra problema"]
  const infoLevel2 = [
    [
      "Aqui es mas jodio",
      "la verdad que si",
      "pero si se hace bien, esta columna deberia molar",
    ],
    ["Esta otra columna va a su rollo", " a ver lo que sale", "eeeyy"],
    ["aqui ya ni se que poner", "pero habia que cumplir", "no se que pasara"],
  ];

  return (
    <div>
      <Comp
        componente={<p>componente...</p>}
        render={(data) => <section>{data}</section>}
      >
        <p>children</p>
      </Comp>
      <FlexBuilder itemWidth={"250px"} info={infoLevel2} />
    </div>
  );
}

export default Tools;

function Comp({ render, children, componente }: CompProps) {
  return (
    <div>
      {render("render prop data")}
      {children}
      {componente}
    </div>
  );
}

type RenderFunction = (data: string) => JSX.Element;
interface CompProps {
  componente: JSX.Element;
  render: RenderFunction;
  children?: React.ReactNode;
}
