import React, { useState } from "react";
import styles from "./error-boundary.module.scss"
import { Container } from "../container/container.container";
import { error500Info } from "./error-boundary.info";

  
const ErrorBoundary = ({ children }: {children: JSX.Element}): any => {
    const [state, setState] = useState<State>({
      hasError: false,
    });
  
    const resetError = (): void => {
      setState({ hasError: false });
    };
  
    const renderError = (): React.ReactNode => (
      <ErrorComponent {...error500Info} onClick={resetError} />
    );
  
    const handleOnError = (): void => {
      setState({ hasError: true });
    };
  
    return state.hasError ? renderError() : (
      <div onError={handleOnError}>
        {children}
      </div>
    );
  };

export default ErrorBoundary;

export function ErrorComponent (props: ErrorProps) {
    const { icon, title, subtitle, action, onClick } = props;

    return (
      <div className={styles.container}>
        <Container>
          <img
            className={styles.image}
            src={icon}
            alt="Error"
          />
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.subtitle}>{subtitle}</p>
          <div className={styles.button}>
            <ButtonComponent action={action} onClick={onClick} />
          </div>
        </Container>
      </div>
    )
}

function ButtonComponent ({ action, onClick }: RedirectButtonProps): JSX.Element {
    const isRedirect = action === "redirect";
    const href = isRedirect
      ? "/"
      : undefined;
  
    const RedirectComponent = (): JSX.Element => (
      <a href={href}>Ir a la Home</a>
/*       <Button variant="outlined" href={href}>
        Ir a la Home
      </Button> */
    )
  
    const RefreshAndRedirectComponent = (): JSX.Element => (
      <a href="/" onClick={onClick}>
        <RedirectComponent />
      </a>
    )
  
    return isRedirect
      ? <RedirectComponent />
      : <RefreshAndRedirectComponent />
  }

export interface ErrorProps {
    icon: string;
    title: string;
    subtitle: string;
    action: Action;
    onClick?: () => void;
}
type Action = "redirect" | "redirectAndRefresh";

interface RedirectButtonProps {
    action: Action;
    onClick?: () => void;
}

interface Props {
    children: React.ReactNode;
}

interface State {
    hasError: boolean;
}