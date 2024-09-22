import React from "react";

const App = () => {
  const name = "Krishna";
  const x = 10;
  const y = 30;

  const names = ["Krishna Madhav", "Mohan", " Mouli", "ABC"];
  const loggedIn = true;

  const styles = {
    color: "blue",
    fontSize: "24px",
  };

  return (
    <>
      <div className="text-5xl">App</div>
      <p style={styles}>Hello {name}</p>
      <p>
        Sum of {x} and {y} is {x + y}
      </p>

      <ol>
        {names.map((name, index) => (
          <li key={index}> {name} </li>
        ))}

        {loggedIn && <h1>Hello Member</h1>}
      </ol>
    </>
  );
};

export default App;
