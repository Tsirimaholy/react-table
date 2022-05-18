export function CollapsableNav(props) {
  const { children,id } = props;
  return (
    <div
      className="collapse"
      id={id}
      aria-labelledby="headingOne"
      data-bs-parent="#sidenavAccordion"
    >
      <nav className="sb-sidenav-menu-nested nav">
         {children}
      </nav>
    </div>
  );
}
