import React from 'react';

const List = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, props.name),
    React.createElement("h3", {}, props.description),
    React.createElement("h3", {}, props.example),
  ]);
};

export default List;