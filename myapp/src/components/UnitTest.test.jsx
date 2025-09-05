import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterAll, afterEach, beforeEach, describe, expect, vi } from "vitest";
import UnitTest from "./UnitTest";
import { ProductService } from "../services/Product.service";

vi.mock('../services/Product.service', () => ({
    ProductService: {
        getProducts: vi.fn(),
    },
}));

//Test suites
describe('UnitTest Component', () => {

    beforeEach(()=>{

    })

    afterEach(()=>{
        
    })



    //test case
    it('Pass num1>0, num2>0 shows result>0', () => {

        //Arrangement
        render(<UnitTest />);

        fireEvent.change(screen.getByTestId('test-num1'), { target: { value: 10 } });
        fireEvent.change(screen.getByTestId('test-num2'), { target: { value: 20 } });

        //Act
        fireEvent.click(screen.getByTestId('test-submit'));

        //Assert
        expect(screen.getByTestId('test-result').innerHTML).toEqual('Result: 30');
    })

    it('Pass num1<0, num2<0 shows result<0', () => {
        render(<UnitTest />);

        fireEvent.change(screen.getByTestId('test-num1'), { target: { value: -10 } });
        fireEvent.change(screen.getByTestId('test-num2'), { target: { value: -20 } });

        fireEvent.click(screen.getByTestId('test-submit'));

        expect(screen.getByTestId('test-result').innerHTML).toEqual('Result: -30');
    })

    it('Test loadProduct method', async () => {
        //Arrangement
       
        const mockProdcuts = [
            { productId: 1, productName: 'test1' },
            { productId: 2, productName: 'test2' }
        ];

        ProductService.getProducts.mockResolvedValue({ data: mockProdcuts });

        const { container } = render(<UnitTest />);

        //Act
        fireEvent.click(screen.getByTestId('test-loadproduct'));

        //Assert
        expect(ProductService.getProducts).toHaveBeenCalledTimes(1);

        await waitFor(() => {
            const fli = container.querySelector('ul > li');
            expect(fli.innerHTML).toEqual("test1");

        })
    })

})