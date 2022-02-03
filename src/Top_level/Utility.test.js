import { render, screen } from '@testing-library/react';
import Utility from './Utility';
import { MemoryRouter } from "react-router-dom";


it("renders without crashing", function () {
  <MemoryRouter>
    <Utility />
  </MemoryRouter>
});

it("matches snapshot", function () {
  const container = render(
      <MemoryRouter>
          <Utility />
      </MemoryRouter>
  );
  expect(container.asFragment()).toMatchSnapshot();
});