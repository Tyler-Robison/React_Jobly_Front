import { render, screen } from '@testing-library/react';
import CompanyList from './CompanyList';
import { MemoryRouter } from "react-router-dom";
import UserProvider from '../testUtils'


it("renders without crashing", function () {
    <MemoryRouter>
        <CompanyList />
    </MemoryRouter>
});

it("matches snapshot", function () {

    const container = render(
        <MemoryRouter>
            <UserProvider>
                <CompanyList />
            </UserProvider>
        </MemoryRouter>
    );
    expect(container.asFragment()).toMatchSnapshot();
});