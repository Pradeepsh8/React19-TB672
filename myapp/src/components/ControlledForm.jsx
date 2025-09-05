import { useState } from "react";
import { categoryList } from "../data/data";
import { validateProductForm } from "../validation/validations";


function ControlledForm() {

    const product = {
        productId: 0,
        productName: "",
        productCode: "",
        price: 0,
        categoryId: ""
    }

    const [productForm, setProductForm] = useState(product);
    const [errors, setErrors] = useState([]);

    const handleChange = (e) =>{
        setProductForm(prev=>({...prev, [e.target.name]:e.target.value}));

        setErrors(validateProductForm(e.target.name, e.target.value));
    }

    const handleSaveProduct = (e) =>{
        e.preventDefault();

        alert("Product Saved Successfully" + JSON.stringify(productForm));
    }

    return (<>
        <h4>Add Product (Controlled Component)</h4>
        <div className="row">
            <div className="col-lg-6">
                <form onSubmit={(e) => handleSaveProduct(e)}>
                    <div className="form-group">
                        <label>Category</label>
                        <select className="form-select" name="categoryId" value={productForm.categoryId} onChange={(e)=>handleChange(e)}>
                            {categoryList.map((cat, indx) =>
                                (<option key={cat.categoryId} value={cat.categoryId}>{cat.categoryName}</option>))}
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Product Id</label>
                        <input type="text" name="productId" className="form-control" value={productForm.productId} onChange={(e)=>handleChange(e)} />
                    </div>
                    <div className="form-group">
                        <label>Product Code</label>
                        <input type="text" name="productCode" className="form-control" value={productForm.productCode} onChange={(e)=>handleChange(e)} />
                    </div>
                    <div className="form-group">
                        <label>Product Name</label>
                        <input type="text" name="productName" className="form-control" value={productForm.productName} onChange={(e)=>handleChange(e)}/>
                        {errors && errors.hasOwnProperty('productName') && 
                        <span className="text-danger">{errors.productName}</span>}
                    </div>
                    <div className="form-group">
                        <label>Product Price</label>
                        <input type="text" name="price" className="form-control" value={productForm.price} onChange={(e)=>handleChange(e)}/>
                        {errors && errors.hasOwnProperty('price') && 
                        <span className="text-danger">{errors.price}</span>}
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Save Product" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        </div>
    </>)
};

export default ControlledForm;