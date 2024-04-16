const heading = React.createElement(
  "h1",
  { id: "heading", name: "vaibhavReact" },
  "EHading from React"
);
/****
 * in above React,createElement the second parameter is {} and it takes
 * attributes as i had passed and we can check it in Element of Browser
 * as this <h1 id="heading" name="vaibhavReact">EHading from React</h1>
 */
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
