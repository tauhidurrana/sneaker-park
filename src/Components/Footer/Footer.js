import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='QueAns-container'>
            <h2>How React Works?</h2>
            <p>
            React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes. The declarative view makes your code more predictable and easier to debug.
            A React application is made of multiple components, each responsible for rendering a small, reusable piece of HTML. Components can be nested within other components to allow complex applications to be built out of simple building blocks. A component may also maintain an internal state – for example, a TabList component may store a variable corresponding to the currently open tab.

            Note: React is not a framework. It is just a library developed by Facebook to solve some problems that we were facing earlier.
            </p>

            <h2>How UseState works?</h2>
            <p>
            Like every other React hook, the useState hook is a special JavaScript function and hence must be invoked as a function. When it is invoked inside a function component, it declares a piece of state which React keeps track of under the hood for subsequent re-renders of the component.
            </p>
        </div>
    );
};

export default Footer;