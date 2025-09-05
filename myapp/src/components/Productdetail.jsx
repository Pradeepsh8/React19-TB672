import { useNavigate } from "react-router-dom";
import Offer from "./Offer";


function Productdetail({productInfo,name}) {

    console.log('Productdetail component loaded');

    const navigate = useNavigate();

    const redirectToView = (pid) =>{
        navigate(`/product-view/${pid}`);
    }

    return (<>
        <tr key={productInfo.productId}>
            <td><Offer/></td>
            <td>{productInfo.productId}</td>
            <td>{productInfo.productCode}</td>
            <td>{productInfo.productName}</td>
            <td>{productInfo.price}</td>
            <td>
                <button className="btn btn-info" onClick={()=>redirectToView(productInfo.productId)}>View</button>
            </td>
        </tr>
    </>)
}

export default Productdetail;