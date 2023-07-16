import { ErrorProps } from "./error-boundary.container"


export const error404Info: ErrorProps = {
  icon: "/icons/404.svg",
  title: "¿Te has perdido?",
  subtitle: "La página que buscas no existe o se ha movido de sitio, lo sentimos.",
  action: "redirect",
}

export const error500Info: ErrorProps = {
  icon: "/icons/500.svg",
  title: "Algo no ha funcionado",
  subtitle: "Hemos tenido algún problema en la página. Inténtalo de nuevo en unos minutos",
  action: "redirectAndRefresh",
}