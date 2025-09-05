

export const validateProductForm = (fieldName, fieldValue) => {

    let errors = {};
    if (fieldName == "productName") {
        if (!fieldValue.length) {
            errors.productName = 'Product Name is mandatory';
        }
    }

    if (fieldName == "price") {
        if (!fieldValue.length) {
            errors.price = 'Product Price is mandatory';
        }
    }

    return errors;

}