import { render } from "react-dom";
import { StrictMode, useState } from "react";
import ReactDOM from "react-dom";
import SearchParams from "./SearchParams";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Details from "./Details";
import ThemeContext from "./ThemeContext";

const App = () => {
  const theme = useState("#FF5060");

  return (
    <ThemeContext.Provider value={theme} >
      <div>
        <Router>
          <header>
            <Link to="/">
              <h1>Adopt Me!</h1>
            </Link>
          </header>
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
    </ThemeContext.Provider>

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
