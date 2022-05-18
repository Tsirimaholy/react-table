export function BreadCrumbItem(props) {
  const { label, href, status } = props;
  return (
    <li className="breadcrumb-item active">
      <a href={href}>{label}</a>
    </li>
  );
}
