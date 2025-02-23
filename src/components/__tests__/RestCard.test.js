import { render, screen } from "@testing-library/react";
import RestCard, { withPromotedLabel } from '../RestCard';
import MOCK_DATA from '../mocks/resCardMock.json';
import "@testing-library/jest-dom";

it('Should render Rest Card component',()=>{
    render(<RestCard restDetails={MOCK_DATA}/>);
    const restName = screen.getByText('Donne Biryani House');
    expect(restName).toBeInTheDocument();
});

it('Should render Rest Card component with promoted label',()=>{
    const RestCardPromoted = withPromotedLabel(RestCard);
    render(<RestCardPromoted restDetails={MOCK_DATA}/>);
    const promotedLabel = screen.getByText('Promoted');
    expect(promotedLabel).toBeInTheDocument();
});