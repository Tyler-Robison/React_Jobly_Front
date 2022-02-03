import { render, screen } from '@testing-library/react';
import JobCard from './JobCard';
import { MemoryRouter } from "react-router-dom";
import UserProvider from '../testUtils'

it("renders without crashing", function () {
    <MemoryRouter>
        <JobCard />
    </MemoryRouter>
});

it("matches snapshot", function () {

    const container = render(
        <MemoryRouter>
            <UserProvider>
                <JobCard />
            </UserProvider>
        </MemoryRouter>
    );
    expect(container.asFragment()).toMatchSnapshot();
});