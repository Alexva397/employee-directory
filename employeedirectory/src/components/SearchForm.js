const SearchForm = (props) => {
    return (
        <form className="form-inline m-4">
            <div className="input-group mb-3">
                <input 
                    type="search"
                    name="search"
                    className="form-control" 
                    value={props.search}
                    onChange={props.handleInputChange}
                    placeholder="Search by last name" 
                />
                <div className="input-group-append">
                    <button 
                        className="btn btn-outline-secondary" 
                        type="button"
                        onClick={props.handleFormSubmit}
                    >Search</button>
                </div>  
            </div>
        </form>  
    );
}

export default SearchForm;