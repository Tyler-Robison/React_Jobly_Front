import { render, screen } from '@testing-library/react';
import SearchForm from './SearchForm';
import { MemoryRouter } from "react-router-dom";
import UserProvider from '../testUtils'


it("renders without crashing", function () {
  <MemoryRouter>
    <SearchForm />
  </MemoryRouter>
});

it("matches snapshot", function () {

    const container = render(
        <MemoryRouter>
            <UserProvider>
                <SearchForm />
            </UserProvider>
        </MemoryRouter>
    );
    expect(container.asFragment()).toMatchSnapshot();
});