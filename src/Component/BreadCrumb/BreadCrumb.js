export function BreadCrumb(props) {
  const { children } = props;
  return <ol className="breadcrumb mb-4">{children}</ol>;
}
