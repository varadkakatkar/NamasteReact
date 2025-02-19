const heading = React.createElement("h1", { id: "heading", className: "heading" }, "Inception from React");
console.log("heading react element OBJECT.....", heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
// convert react element into html using reactDOM.render

// Nested React Element

const parent = React.createElement(
    "div",
    { id: "parent" }, [
    React.createElement("div", { id: "child1" }, [
        React.createElement("h1", { id: "h1" }, "I am h1"),
        React.createElement("h2", { id: "h2" }, "I am h2")
    ]
    ), 
    React.createElement("div", { id: "child2" }, [
        React.createElement("h1", { id: "h1" }, "I am h1"),
        React.createElement("h2", { id: "h2" }, "I am h2")
    ]
    )]
)
console.log("parent react element OBJECT.....", parent);
const root2 = ReactDOM.createRoot(document.getElementById("root"));
root2.render(parent);
