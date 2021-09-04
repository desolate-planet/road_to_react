import * as React from "react";

const title = "React";

const welcome = {
  greeting: "Hey",
  title: "React",
};

function getName() {
  return "Stephen";
}

function App() {
  // you can do something in between

  return (
    <div>
      <h1>
        {welcome.greeting} {welcome.title}
      </h1>
      <p>Your name is {getName()}</p>

      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />
    </div>
  );
}

export default App;
