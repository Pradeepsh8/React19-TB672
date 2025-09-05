import { ErrorMessage, Field, Form, Formik } from "formik";
import { categoryList } from "../data/data";
import * as Yup from 'yup';
import { ProductService } from "../services/Product.service";
import { useEffect, useState } from "react";
import { CategoryService } from "../services/Category.service";
import { useParams } from "react-router-dom";

function Formikform() {

    const { pid } = useParams();

    const [productForm,setProductForm] = useState({
        productId: "",
        productCode: "",
        productName: "",
        price: 0,
        categoryId: 0
    })

    useEffect(() => {
        if (pid != null) {
            ProductService.getProductById(pid).then((resp) => {
                console.log(resp.data);
                setProductForm(resp.data)
            })
        }
    }, [pid]);

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        CategoryService.getCategories()
            .then((resp) => {
                setCategories(resp.data);
            }).catch((err) => {
                console.log('Error', err);
            })
    }, [])

    const handleSaveProduct = (frm) => {

        ProductService.addProduct(frm)
            .then((resp) => {
                if (resp.data) {
                    alert('Product is saved successfully' + JSON.stringify(frm));
                }
            }).catch((err) => {
                console.log('Error', err);
            })
    }

    const validateFn = (frm) => {
        let errors = {};
        const productCodeRegex = /^[a-zA-Z0-9 ]+$/;
        if (!frm.productName) {
            errors.productName = "Product Name is required";
        }
        else if (!frm.productCode) {
            errors.productCode = "Product Code is required";
        }
        else if (!productCodeRegex.test(frm.productName)) {
            errors.productName = "Enter a valid productname";
        }

        return errors;
    }

    const validateSchema = Yup.object({
        productCode: Yup.string().required('Product Code is required'),
        productName: Yup.string().required('Product Name is required')
            .matches(/^[a-zA-Z0-9 ]+$/, "Product Name is invalid"),
        categoryId: Yup.string().notOneOf(["0"], "Select a valid category"),
        price: Yup.number().required('Price is mandatory')

    })

    return (<>
        <div className="row">
            <div className="col-lg-6">
                <h4>App Product (Formik)</h4>
                <Formik
                    initialValues={productForm}
                    enableReinitialize={true}
                    validationSchema={validateSchema}
                    onSubmit={(frm) => handleSaveProduct(frm)}>
                    <Form>
                        {/* {frm => (
                        <form onSubmit={frm.handleSubmit}> */}
                        <div className="form-group">
                            <label>Category</label>
                            <Field name="categoryId" as="select" className="form-select">
                                <option value="0">--Select--</option>
                                {categories.map((cat, indx) =>
                                    (<option key={cat.categoryId} value={cat.categoryId}>{cat.categoryName}</option>))}
                            </Field>
                            <ErrorMessage className="text-danger" component="label" name="categoryId" />
                        </div>
                        <div className="form-group">
                            <label>Product Id</label>
                            <Field name="productId" type="number" className="form-control"></Field>
                        </div>
                        <div className="form-group">
                            <label>Product Code</label>
                            <Field name="productCode" className="form-control"></Field>
                            <ErrorMessage className="text-danger" component="label" name="productCode" />
                        </div>
                        <div className="form-group">
                            <label>Product Name</label>
                            <Field name="productName" as="textarea" className="form-control"></Field>
                            <ErrorMessage className="text-danger" component="label" name="productName" />
                        </div>
                        <div className="form-group">
                            <label>Product Price</label>
                            {/* <input type="text" name="price" className="form-control"
                                    onChange={frm.handleChange}
                                    onBlur={frm.handleBlur}
                                    value={frm.values.price} />
                                {frm.touched && frm.errors.price ? <span className="text-danger">{frm.errors.price}</span> : null} */}
                            <Field name="price" type="number" className="form-control"></Field>
                            <ErrorMessage className="text-danger" component="label" name="price" />
                        </div>
                        <input type="submit" className="btn btn-primary" value="Save Product" />
                        {/* </form>

                    )} */}
                    </Form>
                </Formik>
            </div>
        </div>
    </>);

}

export default Formikform;