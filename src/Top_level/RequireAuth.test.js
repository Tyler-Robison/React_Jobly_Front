import { render, screen } from '@testing-library/react';
import RequireAuth from './RequireAuth';
import { MemoryRouter } from "react-router-dom";
import UserContext from "../context/UserContext";
import UserProvider from '../testUtils'

it("renders without crashing", function () {
  <MemoryRouter>
    <RequireAuth />
  </MemoryRouter>
});

it("matches snapshot", function () {

    const container = render(
        <MemoryRouter>
            <UserProvider>
                {/* RequireAuth needs a children prop */}
                <RequireAuth><p>dummy para</p></RequireAuth>
            </UserProvider>
        </MemoryRouter>
    );
    expect(container.asFragment()).toMatchSnapshot();
});