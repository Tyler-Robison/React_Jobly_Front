import { render, screen } from '@testing-library/react';
import Home from './Home';
import { MemoryRouter } from "react-router-dom";
import UserProvider from '../testUtils'

it("renders without crashing", function () {
    <MemoryRouter>
        <Home />
    </MemoryRouter>
});

it("matches snapshot", function () {

    const container = render(
        <MemoryRouter>
            <UserProvider>
                <Home />
            </UserProvider>
        </MemoryRouter>
    );
    expect(container.asFragment()).toMatchSnapshot();
});

it("matches snapshot when logged out", function () {
    const container = render(
        <MemoryRouter>
            <UserProvider currentUser={null}>
                <Home />
            </UserProvider>
        </MemoryRouter>,
    );
    expect(container.asFragment()).toMatchSnapshot();
});