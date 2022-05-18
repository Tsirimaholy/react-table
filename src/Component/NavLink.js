export function NavLink(props) {
  const {label,href}=props;
    return (
    <a className="nav-link" href={href}>
      {label}
    </a>
  );
}
