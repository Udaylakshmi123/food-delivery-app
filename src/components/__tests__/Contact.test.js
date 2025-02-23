import { render,screen } from "@testing-library/react"
import ContactComponent from "../Contact";
import "@testing-library/jest-dom";

describe("contact us Page Test Cases",()=>{

it('Should load contact us component',()=>{
    render(<ContactComponent />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
})

it('Should load button contact us component',()=>{
    render(<ContactComponent />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
})

it('Should check input placeholder name',()=>{
    render(<ContactComponent />);
    const input = screen.getByPlaceholderText('name');
    expect(input).toBeInTheDocument();
})

it('When component load 2 input boxes loaded or not',()=>{
render(<ContactComponent />);
 const inputBoxes = screen.getAllByRole("textbox");
 expect(inputBoxes.length).toBe(2);
})    
})