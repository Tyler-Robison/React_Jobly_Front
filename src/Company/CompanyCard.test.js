import { render, screen } from '@testing-library/react';
import CompanyCard from './CompanyCard';
import { MemoryRouter } from "react-router-dom";
import UserProvider from '../testUtils'

it("renders without crashing", function () {
    <MemoryRouter>
        <CompanyCard />
    </MemoryRouter>
});

it("matches snapshot", function () {

    const container = render(
        <MemoryRouter>
            <UserProvider>
                <CompanyCard />
            </UserProvider>
        </MemoryRouter>
    );
    expect(container.asFragment()).toMatchSnapshot();
});