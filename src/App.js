import { render } from "react-dom";
import { StrictMode } from "react";
import ReactDOM from "react-dom";
import SearchParams from "./SearchParams";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Details from "./Details";

const App = () => {
  return (
    <div>
      <Router>
        <h1>Adopt Me!</h1>
        <Switch>
          <Route path="/details/:id">
            <Details />
          </Route>
          <Route path="/">
            <SearchParams />
          </Route>
        </Switch>
      </Router>
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
