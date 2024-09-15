import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

function Myfunc() {
  return (
    <div>
    <h1>My name is prince</h1>
    </div>
  );
}

// const reactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   children: "Click me to visit Google.com",
// };
// const anotherElement = (
//   <a href="https://google.com" target='_blank'>Visit Google</a>
// )

const anotherUser = "raghav raj"
const reactRender = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "Click me to visit Google.com",
  anotherUser
)

createRoot(document.getElementById('root')).render(
  // <App/>
  reactRender
  // <Myfunc/>

);