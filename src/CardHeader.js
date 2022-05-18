export function CardHeader(props) {
  const { label, fasClass } = props;
  return (
    <div className="card-header">
      <i className={fasClass}></i>
      {label}
    </div>
  );
}
