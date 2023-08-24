function Tools(): JSX.Element {
  return (
    <div>
      <Comp
        componente={<p>componente...</p>}
        render={(data) => <section>{data}</section>}
      >
        <p>children</p>
      </Comp>
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
