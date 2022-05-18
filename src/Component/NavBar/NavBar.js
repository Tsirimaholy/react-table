export function NavBar(props) {
  const { children } = props;
  return (
    <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
    {children}
    </nav>
  );
}

