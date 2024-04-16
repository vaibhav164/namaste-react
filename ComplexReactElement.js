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

/***
 * lets create a complex structur which has similar style but have
 * sibiling element as below
 * <div id='grandParent'>
 *      <div id='parent'>
 *          <h3 id='child1'>Complex Element child1</h3>
 *          <h2 id='child2'>Complex Element Child2</h2>
 *      </div>
 * </div>
 */
/****___________________________
 * when we pass a sibling tags or elements react will throw an error
 * that Each child in a list should have a unique "key" prop.
 */
const SiblingElement = React.createElement(
  "div",
  { id: "grandParent" },
  React.createElement("div", { id: "parent" }, [
    React.createElement("h3", { id: "child1" }, "Complex Element child1"),
    React.createElement("h2", { id: "child2" }, "Complex Element child2"),
  ])
);

const container = ReactDOM.createRoot(document.getElementById("root"));

container.render(SiblingElement);
