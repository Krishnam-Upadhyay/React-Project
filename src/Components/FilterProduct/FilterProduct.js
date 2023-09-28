import './FilterProduct.css'
const FilterProduct = (props) => {
    const onFilterValueHandler = (event) => {

        props.onFilterValueSelected(event.target.value);
    }
    return <div className="filter-area" >
        <select name="isAvailable" onChange={onFilterValueHandler}>
            <option value="all">All</option>
            <option value="available">Available</option>
            <option value="unavailable">Unavailable</option>
        </select>
    </div>
}

export default FilterProduct;