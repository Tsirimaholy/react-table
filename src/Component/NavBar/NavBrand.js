export function NavBrand(props) {
  const { brandLabel } = props;
  return (
    <a className="navbar-brand ps-3" href="index.html">
      {brandLabel}
    </a>
  );
}
