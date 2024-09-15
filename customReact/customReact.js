function customRender(reactElement, container) {
  // let element = document.createElement(reactElement.type);
  // element.innerHTML = reactElement.children;
  // element.setAttribute("href", reactElement.props.href);
  // element.setAttribute("target", reactElement.props.target);
  // container.appendChild(element);

  let domElement = document.createElement(reactElement.type);
  for (const prop in reactElement.props) {
    if(prop ===   reactElement.children)  continue;
    domElement.setAttribute(prop, reactElement.props[prop]);
  }
  domElement.innerHTML = reactElement.children;
  container.appendChild(domElement);

}

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to visit Google.com",
};

const mainContainer = document.getElementById("root");

customRender(reactElement, mainContainer);
