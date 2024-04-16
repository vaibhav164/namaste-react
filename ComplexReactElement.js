/****
 * lets create an complex element in React using React.createElement as below
 * <div id='grandParent'>
 *      <div id='parent'>
 *          <h3 id='child'>Complex Element demo</h3>
 *      </div>
 * </div>
 */
//So to create the above complex element here is the way lets see

const complexElement = React.createElement(
  "div",
  { id: "grandParent" },
  React.createElement(
    "div",
    { id: "parent" },
    React.createElement("h3", { id: "child" }, "Complex Element demo")
  )
);

const container = ReactDOM.createRoot(document.getElementById("root"));

container.render(complexElement);
