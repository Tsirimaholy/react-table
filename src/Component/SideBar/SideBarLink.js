export function SideBarLink(props) {
  const { label, className,href } = props;
  return (
    <a className="nav-link" href={href}>
      <div className="sb-nav-link-icon">
        <i className={className}></i>
      </div>
      {label}
    </a>
  );
}
