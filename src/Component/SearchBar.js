export function SearchBar(props) {
  const {label}=props;
    return(
        <div className="input-group">
            <input
              className="form-control"
              type="text"
              placeholder={label}
              aria-label={label}
              aria-describedby="btnNavbarSearch"
            />
            <button
              className="btn btn-primary"
              id="btnNavbarSearch"
              type="button"
            >
              <i className="fas fa-search"></i>
            </button>
          </div>
    );
}