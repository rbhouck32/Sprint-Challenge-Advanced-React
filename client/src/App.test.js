import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import PlayerCard from "./components/PlayerCard";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

test("renders without crashing", () => {
  const component = render(<App />);
});

test("contains an h1 with the following text", () => {
  const { getByText } = render(<App />);

  const h1title = getByText(/Women's World Cup Ranking by Search Interest/i);

  expect(h1title).toBeInTheDocument();
});

test("contains an h2 with the following text", props => {
  const { getByText } = render(<PlayerCard />);

  const playerTitle = getByText(/Player/i);

  expect(playerTitle).toBeInTheDocument();
});
