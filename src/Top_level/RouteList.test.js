import { render, screen } from '@testing-library/react';
import RouteList from './RouteList';
import { MemoryRouter } from "react-router-dom";
import UserProvider from '../testUtils'


it("renders without crashing", function () {
    <MemoryRouter>
        <RouteList />
    </MemoryRouter>
});

it("matches snapshot", function () {

    const container = render(
        <MemoryRouter>
            <UserProvider>
                <RouteList />
            </UserProvider>
        </MemoryRouter>
    );
    expect(container.asFragment()).toMatchSnapshot();
});