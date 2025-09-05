import { useEffect, useState } from "react";
import { ProductService } from "../services/Product.service";
import { useNavigate } from "react-router-dom";


function Products() {

    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        ProductService.getProducts()
            .then((resp) => {
                setProducts(resp.data);
                
            })
    }, []);

    const handleDeleteProduct = (pid) => {
        const confirmDelete = confirm('Do you wish to delete product?');

        if (confirmDelete) {
            ProductService.deleteProduct(pid)
                .then((resp) => {
                    if (resp.data) {
                        alert('Product is deleted');
                        window.location.reload();
                    }
                })
        }
    }

    const handleEditProduct = (pid) => {
        navigate(`/formik/${pid}`);
    }

    return (<>
        <h4>Product List</h4>
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>Product Id</th>
                    <th>Product Code</th>
                    <th>Product Name</th>
                    <th>Product Price</th>
                    <th>Category</th>
                    <th>
                        Delete
                    </th>
                    <th>
                        Edit
                    </th>
                </tr>
            </thead>
            <tbody>
                {products.map((prod, indx) =>
                (
                    <tr key={prod.productId}>
                        <td>{prod.productId}</td>
                        <td>{prod.productCode}</td>
                        <td>{prod.productName}</td>
                        <td>{prod.price}</td>
                        <td>{prod.categoryId}</td>
                        <td>
                            <input type="button" className="btn btn-danger" title="Delete Product"
                                onClick={()=>handleDeleteProduct(prod.productId)}
                                value="X" />
                        </td>
                        <td>
                            <input type="button" className="btn btn-info" title="Edit Product"
                                onClick={()=>handleEditProduct(prod.productId)}
                                value="Edit" />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </>)
}

export default Products;