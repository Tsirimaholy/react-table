export function SideBarFooter(props) {
  const { smallLabel, bigLabel } = props;
  return (
    <div className="sb-sidenav-footer">
      <div className="small">{smallLabel}</div>
      {bigLabel}
    </div>
  );
}
