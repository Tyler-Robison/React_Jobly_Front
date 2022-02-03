import { render, screen } from '@testing-library/react';
import NavBar from './NavBar';
import { MemoryRouter } from "react-router-dom";
import UserProvider from '../testUtils'

it("renders without crashing", function () {
    <MemoryRouter>
        <NavBar />
    </MemoryRouter>
});

it("matches snapshot", function () {

    const container = render(
        <MemoryRouter>
            <UserProvider>
                <NavBar />
            </UserProvider>
        </MemoryRouter>
    );
    expect(container.asFragment()).toMatchSnapshot();
});

it("matches snapshot when logged out", function () {
    const container = render(
        <MemoryRouter>
            <UserProvider currentUser={null}>
                <NavBar />
            </UserProvider>
        </MemoryRouter>,
    );
    expect(container.asFragment()).toMatchSnapshot();
});