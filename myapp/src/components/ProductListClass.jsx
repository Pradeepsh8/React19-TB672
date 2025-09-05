import React, { Component } from "react";
import { productList } from "../data/data";
import Productdetail from "./Productdetail";
import { UserContext } from "../context/UserProvider";


class ProductListClass extends Component
{
    static contextType = UserContext;

    constructor(props){
        super(props);
        this.state = {
            filteredProducts: []
        }
        this.addressRef = React.createRef();
    }


    componentDidMount(){
        console.log('ProductList class componentDidMount triggered');
    }

    componentWillUnmount(){
        console.log('ProductList class componentWillUnmount triggered')
    }

    componentDidUpdate(prevProps){
        console.log('ProductList class componentDidUpdate triggered');
        const { selectedCategory, searchText, onNotify } = this.props;
        if(prevProps.selectedCategory !== selectedCategory || prevProps.searchText !== searchText ){
             let filtered = selectedCategory
                        ? productList.filter(f => f.categoryId === Number(selectedCategory))
                        : productList;
            
                    filtered = searchText
                        ? filtered.filter(f => f.productName.toLocaleLowerCase().indexOf(searchText.toLocaleLowerCase()) !== -1)
                        : filtered;

            this.setState({filteredProducts: filtered});
            onNotify(filtered.length);
        }
    }

    render(){
        const { currentUser } = this.context;
        const {filteredProducts} = this.state;
         return (<>
         <b>{currentUser}</b>
        <table className="table table-responsive">
            <thead>
                <tr>
                    <th>Product Id</th>
                    <th>Product Code</th>
                    <th>Product Name</th>
                    <th>Product Price</th>
                    <th>View</th>
                </tr>
            </thead>
            <tbody>
                {filteredProducts.map((product, index) => (
                    <Productdetail key={index} productInfo={product} name="pradeep shet" />
                ))}
            </tbody>
        </table>
    </>);
    }


}

export default ProductListClass;