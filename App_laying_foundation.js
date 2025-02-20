import React from "react";
import ReactDOM from "react-dom/client";


// React.createElement("h1", { id: "heading" }, "Hello World from React");
//React.createElement => React element => JS Object => rendered as html element




// JSX code is transpiled by parcel using babel
// Babel is a javascript compiler/transpiler that converts the JSX code into a javascript code

// JSX code is transpiled by parcel using babel and JS engine understands the transpiled code

// JS engine receves the code that browser can understand

// transpiled means converting the code into a different format that is understandable by the JS engine
const jsxHeading = (<h1 id="heading">
    Hello World from React JSX !!!
    </h1>); // JS engine will not understand this as JSX code and not a pure js code

// JSX code is transpiled to React.createElement => JS object => renderd as an html element

// JSX is same as react element

// JSX code => React.createElement
// this is react element
const root = ReactDOM.createRoot(document.getElementById("root"));


// React function component
const num = 10;
const Header = () => {
    return (
        <div>
           <h3>Number is {num}</h3>
           <h2>This is jsx heading {jsxHeading}</h2>
            <h1>This is Header Component</h1>
        </div>
    )
}


const Header2 = () => <div><h1>Hello World from React Function Component !!!</h1> <Header /> {Header()} </div>
   


root.render(<Header2 />);

