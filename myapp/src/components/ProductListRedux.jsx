import { useEffect, useState } from "react";
import Productdetail from "./Productdetail";
import store from "../store";
import { ProductAction } from "../actions/ProductAction";
import { useSelector } from "react-redux";


function ProductListRedux() {

   const filteredProducts = useSelector((state) => state.productReducer.filteredProducts);

    useEffect(() => {
        //store.dispatch(ProductAction.filterAction());
        //store.dispatch(ProductAction.setTotalCount());

        console.log(filteredProducts);
        
        return (()=> {
            console.log('Unmount triggered');
        })

    }, [filteredProducts]);



    return (<>
        <table className="table table-responsive">
            <thead>
                <tr>
                    <th></th>
                    <th>Product Id</th>
                    <th>Product Code</th>
                    <th>Product Name</th>
                    <th>Product Price</th>
                    <th>View</th>
                </tr>
            </thead>
            <tbody>
                {filteredProducts.map((product, index) => (
                    <Productdetail key={index} productInfo={product} />
                ))}
            </tbody>
        </table>
    </>);
}

export default ProductListRedux;