function Layout({ children/* , section, subsection  */}: LayoutProps): JSX.Element {

    return (
        <>
            {/* <Nav section={section} subsection={subsection} /> */}
            {children}
            {/* <Footer section={section} subsection={subsection} /> */}
        </>
    )
};

export default Layout

interface LayoutProps {
    children: JSX.Element;
    section?: string;
    subsection?: string;
}