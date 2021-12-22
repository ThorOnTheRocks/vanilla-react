import React from 'react';
import ReactDOM from 'react-dom';

import List from './List';

const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Vanilla React!"),
    React.createElement(List, {
      name: "React",
      description: "Best JS Library",
      example: "Facebook",
    }),
    React.createElement(List, {
      name: "Angular",
      description: "Good JS Framework",
      example: "Google",
    }),
    React.createElement(List, {
      name: "Vue",
      description: "Nice JS Framework",
      example: "Unknown",
    })
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
