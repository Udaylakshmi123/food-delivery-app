import { fireEvent, render, screen } from "@testing-library/react";
import {act} from 'react-dom/test-utils';
import RestMenuComponent from "../RestMenu";
import HeaderComponent from "../Header";
import CartList from "../CartList";
import { BrowserRouter } from "react-router-dom";
import MOCK_DATA_NAME from '../mocks/resMenuMock.json';
import { Provider } from 'react-redux';
import appStore from '../../utils/appStore';
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA_NAME);
        }
    })
})

it('Should load restaurant menu component', async () => {
    await act(async ()=> render(<BrowserRouter><Provider store={appStore}>
        <HeaderComponent />
        <RestMenuComponent />
        <CartList />
        </Provider></BrowserRouter>));
    const accordianHead = screen.getByText('Starters (12)');
    fireEvent.click(accordianHead);
    const startersList = screen.getAllByTestId('fooditems');
    expect(startersList.length).toBe(12);
    const addBtns = screen.getAllByRole("button",{name:"ADD"});
    fireEvent.click(addBtns[0]);
    expect(screen.getByText('(1 items)')).toBeInTheDocument();
    fireEvent.click(addBtns[1]);
    expect(screen.getByText('(2 items)')).toBeInTheDocument();
    const afterAddCartList = screen.getAllByTestId('fooditems');
    expect(afterAddCartList.length).toBe(14);
    const clearCartList = screen.getByRole("button",{name:"Clear cart"});
    fireEvent.click(clearCartList);
    expect(screen.getByText('Cart is Empty. Add Items to Cart')).toBeInTheDocument();
})