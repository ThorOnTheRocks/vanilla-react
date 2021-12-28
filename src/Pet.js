const Pet = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.animal}</h2>
      <h2>{props.breed}</h2>
    </div>
  );
};

export default Pet;

// const List = (props) => {
//   return React.createElement("div", {}, [
//     React.createElement("h2", {}, props.name),
//     React.createElement("h3", {}, props.description),
//     React.createElement("h3", {}, props.example),
//   ]);
// };
