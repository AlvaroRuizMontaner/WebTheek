import { ErrorComponent } from "@/_componentes/containers";
import { error404Info } from "@/_componentes/containers/error-boundary/error-boundary.info";

const Page404 = (): JSX.Element => {
  return (
    <div>
      <ErrorComponent {...error404Info} />
    </div>
  );
};

export default Page404;
