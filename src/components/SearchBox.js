function SearchBox({searchChange}) {
    return (
        <input 
            type="search" 
            placeholder="search products"
            onChange={searchChange}
        />
    );
}

export default SearchBox;