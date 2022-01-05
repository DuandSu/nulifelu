function ProdSearchBox({searchChange}) {
    return (
        <input 
            type="search" 
            placeholder="search products"
            onChange={searchChange}
        />
    );
}

export default ProdSearchBox;