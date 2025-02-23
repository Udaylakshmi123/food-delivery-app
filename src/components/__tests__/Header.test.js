import { fireEvent, render, screen } from "@testing-library/react";
import HeaderComponent from "../Header";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";

it("Should load Header component with login button", () => {
  render(
    <BrowserRouter>
     <Provider store={appStore}>
     <HeaderComponent />
     </Provider>
    </BrowserRouter>
  );
  const loginBtn = screen.getByRole("button");
  expect(loginBtn).toBeInTheDocument();
});

it("Should render header component with cartitems zero", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <HeaderComponent />
        </Provider>
      </BrowserRouter>
    );
    const cartItems = screen.getByText("(0 items)");
    expect(cartItems).toBeInTheDocument();
});

it("Should change login button to Logout onclick",()=>{
    render(
        <BrowserRouter>
          <Provider store={appStore}>
            <HeaderComponent />
          </Provider>
        </BrowserRouter>
      );
     const loginButton = screen.getByRole('button',{name:'LogIn'});
     fireEvent.click(loginButton);
     const logoutButton = screen.getByRole('button',{name:'LogOut'});
     expect(logoutButton).toBeInTheDocument();
});