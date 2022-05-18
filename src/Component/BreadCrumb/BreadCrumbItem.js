export function BreadCrumbItem(props) {
  const { label, href } = props;
  return (
    <li className="breadcrumb-item active">
      <a href={href}>{label}</a>
    </li>
  );
}
