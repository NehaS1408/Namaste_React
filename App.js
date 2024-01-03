
/* 
    <div id="parent">
        <div id="child">
            <h1> I am an H1 tag</h1>
        </div>
    </div> 
*/
// How to create the nested structure in react

const parent = React.createElement("div", {id: "parent"}, 
    React.createElement("div", {id: "child"},
    [React.createElement("h1", {}, "I am an H1 tag"),React.createElement("p", {}, "I am an H2 tag")]) // to create the siblings, then we need to pass that in array.
)

const heading = React.createElement('h1', {id: "heading"}, "Hello World from React!!"); //create the element
// {} is place where we give attributes to your tab and attribute to give some id or class whatever we want
// and third parameter is children
const root = ReactDOM.createRoot(document.getElementById("root")); // root is place where all react code run, whatever we want to render we will render inside the root only.

// root.render(heading); // heading is react element a  javascript object to the render file.
root.render(parent); // heading is react element a  javascript object to the render file.