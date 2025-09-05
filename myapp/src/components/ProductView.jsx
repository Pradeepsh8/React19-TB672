import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { productList } from "../data/data";


function ProductView() {

    const { id } = useParams();//Used to read route parameters
    const [productInfo, setProductInfo] = useState({});
    const navigate = useNavigate();

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const city = queryParams.get("city");
    const country = queryParams.get("country");

    useEffect(() => {
        console.log('pid=' + id);
        const productObj = productList.filter(f => f.productId === Number(id));
        setProductInfo(...productObj);
    }, [id]);

    return (<>
        <h4>Product Detail</h4>
        <div>
            <p>Product Id: {productInfo.productId}</p>
            <p>Product Code: {productInfo.productCode}</p>
            <p>Product Name: {productInfo.productName}</p>
            <p>Product Price: {productInfo.price}</p>
        </div>

        <h5>Route Parameter : {id}</h5>
        { /*Conditional Rendering*/ }
        {
            city && country &&
            (<h5>Query string Parameter: {city}, {country}</h5>)

        }

        <button className="btn btn-dark" onClick={()=>navigate(-1)}>Back</button>
    </>)
}

export default ProductView;