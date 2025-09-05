import { useEffect, useState } from "react"
import { ProductService } from "../services/Product.service";


function UnitTest() {

    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState();
    const [products, setProducts] = useState([]);

    const handleAddition = () => {
        const total = Number(num1) + Number(num2);

        setResult(total);

    }

    const handleLoadProduct = () => {
        ProductService.getProducts().then((resp) => {
            setProducts(resp.data);
        })
    }


    return (<>
        <div>
            <input type="number" value={num1} data-testid="test-num1" placeholder="Enter Num 1" onChange={(e) => setNum1(e.target.value)} />
            <input type="number" value={num2} data-testid="test-num2" placeholder="Enter Num 2" onChange={(e) => setNum2(e.target.value)} />

            <button onClick={(e) => handleAddition()} data-testid="test-submit">Addition</button>

            <button onClick={(e) => handleLoadProduct()} data-testid="test-loadproduct">Load Products</button>

            {result !== null && (<p data-testid="test-result">Result: {result}</p>)}

            <ul>
                {products && products.map((prod, indx) => (
                    <li key={indx}>{prod.productName}</li>
                ))}
            </ul>
        </div>
    </>)
}

export default UnitTest;