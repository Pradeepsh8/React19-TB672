import { useEffect, useMemo, useState } from "react";
import { productList } from "../data/data";
import Productdetail from "./Productdetail";

function ProductList({ selectedCategory, searchText, onNotify }) {

    const [filteredProducts, setFilteredProducts] = useState([]);

    const filteredProductsMemo = useMemo(() => {
        console.log('filtered data');
        let filtered = selectedCategory
            ? productList.filter(f => f.categoryId === Number(selectedCategory))
            : productList;

        filtered = searchText
            ? filtered.filter(f => f.productName.toLocaleLowerCase().indexOf(searchText.toLocaleLowerCase()) !== -1)
            : filtered;

        return filtered;
    }, [selectedCategory]);

    useEffect(() => {
        // let filtered = selectedCategory
        //     ? productList.filter(f => f.categoryId === Number(selectedCategory))
        //     : productList;

        // filtered = searchText
        //     ? filtered.filter(f => f.productName.toLocaleLowerCase().indexOf(searchText.toLocaleLowerCase()) !== -1)
        //     : filtered;

        // setFilteredProducts(filtered);
        // console.log('Length=' + filtered.length);
        
        onNotify(filteredProductsMemo.length);

        return (()=> {
            console.log('Unmount triggered');
        })

    }, [selectedCategory]);



    return (<>
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
                {filteredProductsMemo.map((product, index) => (
                    <Productdetail key={index} productInfo={product} name="pradeep shet" />
                ))}
            </tbody>
        </table>
    </>);
}

export default ProductList;