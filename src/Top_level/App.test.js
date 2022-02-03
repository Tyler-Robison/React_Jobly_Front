import { render, screen } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from "react-router-dom";


it("renders without crashing", function () {
  <MemoryRouter>
    <App />
  </MemoryRouter>
});

it("matches snapshot", function () {
  const container = render(
      <MemoryRouter initialEntries={['/']}>
          <App />
      </MemoryRouter>
  );
  expect(container.asFragment()).toMatchSnapshot();
});
