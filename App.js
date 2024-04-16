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
// console.log("heading______", heading);
/****
 *
 * if we console the heading or return value of React.createElement
 * we get an Object not an h1 tag and that object will be used to create
 * h1 tag in dom an object looks as below
 {
  $$typeof: Symbol(react.element)
  key: null
  props: {id: 'heading', name: 'vaibhavReact', children: 'EHading from React'}
   ref: null
   type: "h1"
 _owner:null
_store: {validated: false}
_self: null
_source: null
[[Prototype]]: Object
}
 */

//______Props are children and attributes we pass in an component
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
//so L33 is it takes heading React element that is and Object at the end
//and converts it to an html element and finaly pushes it into the root
//element

const heeadinDemo = document.createElement("h1");
heeadinDemo.innerHTML = "Hellow Demo";

console.log(heeadinDemo);

//L41 will give you an h1 tag
