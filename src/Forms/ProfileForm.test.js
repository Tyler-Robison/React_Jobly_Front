import { render, screen } from '@testing-library/react';
import ProfileForm from './ProfileForm';
import { MemoryRouter } from "react-router-dom";
import UserProvider from '../testUtils'


it("renders without crashing", function () {
  <MemoryRouter>
    <ProfileForm />
  </MemoryRouter>
});

it("matches snapshot", function () {

    const container = render(
        <MemoryRouter>
            <UserProvider>
                <ProfileForm />
            </UserProvider>
        </MemoryRouter>
    );
    expect(container.asFragment()).toMatchSnapshot();
});