import { Component } from "react";
import { categoryList } from "../data/data";
import ProductListClass from "./ProductListClass";


class SearchClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCategory: "",
            searchText: "",
            totalCount: ""
        }
    }

    handleCategoryChange = (e) => {
        this.setState({ selectedCategory: e.target.value });
    }

    handleTextChange = (e) => {
       this.setState({ searchText: e.target.value });
    }

    updateTotal = (msg) => {
        this.setState({ totalCount: msg });
    }

    render(){
        const { selectedCategory, searchText, totalCount } = this.state;

         return (<>

        <h4>Search</h4>
        <label>Filter:</label>
        <input type="text" className="form-control" placeholder="Enter Product Name"
            onChange={(e) => this.handleTextChange(e)} />

        <select className="form-select" onChange={(e) => this.handleCategoryChange(e)} >
            <option value="">--All Categories--</option>
            {categoryList.map((cat, indx) => (
                <option key={indx} value={cat.categoryId}>
                    {cat.categoryName}
                </option>
            ))}
        </select>

        <ProductListClass selectedCategory={selectedCategory} searchText={searchText} onNotify={(e)=>this.updateTotal(e)} />

        <div className="alert alert-warning">
            Total Products Found: {totalCount}
        </div>
    </>);
    }
}

export default SearchClass;