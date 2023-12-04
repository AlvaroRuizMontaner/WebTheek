import { ErrorComponent } from "@/_componentes/containers";
import { error500Info } from "@/_componentes/containers/error-boundary/error-boundary.info";

const Page404 = (): JSX.Element => {
  return (
    <div>
      <ErrorComponent {...error500Info} />
      ERROR 500000000
    </div>
  );
};

export default Page404;
