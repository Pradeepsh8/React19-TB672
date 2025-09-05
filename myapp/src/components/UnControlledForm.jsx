import { useRef, useState } from "react";
import { categoryList } from "../data/data";


function UnControlledForm() {

    const productIdRef = useRef(0);
    const productCodeRef = useRef(null);
    const productNameRef = useRef(null);
    const priceRef = useRef(null);
    const selectedCategoryRef = useRef("");

    const [errors, setErrors] = useState("");

    const handleSaveProduct = (e) => {
        e.preventDefault(); //prevent from default submission 

        if(productNameRef.current.value.length <=0){
            setErrors("Product Name is mandatory");
            return;
        }

        let newProduct = {
            productId: productIdRef.current.value,
            productName: productNameRef.current.value,
            productCode: productCodeRef.current.value,
            price: priceRef.current.value,
            categoryId: selectedCategoryRef.current.value
        }
        alert('Product saved successfully' + JSON.stringify(newProduct));
    }


    return (<>
        <h4>Add Product (UnControlled Component)</h4>
        {errors && <div className="alert alert-danger">{errors}</div>}
        <div className="row">
            <div className="col-lg-6 col-sm-10">

                <form onSubmit={(e) => handleSaveProduct(e)}>
                    <div className="form-group">
                        <label>Category</label>
                        <select className="form-select" ref={selectedCategoryRef}>
                            {categoryList.map((cat, indx) =>
                                (<option key={cat.categoryId} value={cat.categoryId}>{cat.categoryName}</option>))}
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Product Id</label>
                        <input type="text" name="productId" className="form-control" ref={productIdRef} />
                    </div>
                    <div className="form-group">
                        <label>Product Name</label>
                        <input type="text" name="productName" className="form-control" ref={productNameRef} />
                    </div>
                    <div className="form-group">
                        <label>Product Code</label>
                        <input type="text" name="productCode" className="form-control" ref={productCodeRef} />
                    </div>
                    <div className="form-group">
                        <label>Product Price</label>
                        <input type="text" name="price" className="form-control" ref={priceRef} />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Save Product" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        </div>
    </>);
}

export default UnControlledForm;