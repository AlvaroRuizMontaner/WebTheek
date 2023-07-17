import NextLink from "next/link";

export const Link = ({ href, /* passHref, */ children }: iLink): JSX.Element => {
  const newHref = href;
/*   if (typeof window !== "undefined") {
    const utmId = sessionStorage.getItem("utm");

    newHref = utmId ? `${href}?${utmId}` : href;
  } */

  return (
    <NextLink href={newHref} /* passHref={passHref} */>
      {children}
    </NextLink>
  );
};

interface iLink {
  href: string;
  passHref?: boolean;
  children: JSX.Element | JSX.Element[] | string;
}
