import { fireEvent, render,screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import SubComponent from "../Body";
import MOCK_DATA from '../mocks/resListMock.json';
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    })
})

it("Should render Body component and search by house", async ()=>{
    await act(async () => 
        render(<BrowserRouter><SubComponent /></BrowserRouter>)
    );
    const cardsBeforeSearch = screen.getAllByTestId('resCard');
    expect(cardsBeforeSearch.length).toBe(49);
    const searchTxt = screen.getByText('Search');
    const searchInput = screen.getByTestId('searchInput');
    fireEvent.change(searchInput, {target:{value:"house"}});
    fireEvent.click(searchTxt);
    const cardsAfterSearch = screen.getAllByTestId('resCard');
    expect(cardsAfterSearch.length).toBe(4);
});
it("Should render Body component and check top rated resturants", async ()=>{
    await act(async () => 
        render(<BrowserRouter><SubComponent /></BrowserRouter>)
    );
    const cardsBeforeFilter = screen.getAllByTestId('resCard');
    expect(cardsBeforeFilter.length).toBe(49);
    const topRatedBtn = screen.getByRole('button', {name: "Top Rated Restaurants"});
    fireEvent.click(topRatedBtn);
    const cardsAfterFilter = screen.getAllByTestId('resCard');
    expect(cardsAfterFilter.length).toBe(15);
});