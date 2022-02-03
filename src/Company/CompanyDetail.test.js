import { render, screen } from '@testing-library/react';
import CompanyDetails from './CompanyDetails';
import { MemoryRouter } from "react-router-dom";
import UserProvider from '../testUtils'


it("renders without crashing", function () {
    <MemoryRouter>
        <CompanyDetails />
    </MemoryRouter>
});

it("matches snapshot", function () {

    const container = render(
        <MemoryRouter>
            <UserProvider>
                <CompanyDetails />
            </UserProvider>
        </MemoryRouter>
    );
    expect(container.asFragment()).toMatchSnapshot();
});