import { render } from "react-dom";
import { StrictMode } from "react";
import ReactDOM from "react-dom";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams />
    </div>
  );
};

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);

// const App = () => {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h1", {}, "Vanilla React!"),
//     React.createElement(List, {
//       name: "React",
//       description: "Best JS Library",
//       example: "Facebook",
//     }),
//     React.createElement(List, {
//       name: "Angular",
//       description: "Good JS Framework",
//       example: "Google",
//     }),
//     React.createElement(List, {
//       name: "Vue",
//       description: "Nice JS Framework",
//       example: "Unknown",
//     })
//   );
// };

ReactDOM.render(<App />, document.getElementById("root"));
