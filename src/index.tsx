import { h, render } from "preact";
import "./index.css";
import Main from "./components/main"

declare const module: any

const mountNode = document.getElementById('root');

render(<Main />, mountNode, mountNode.lastChild as Element);

// Hot Module Replacement
if (module.hot) {
    module.hot.accept();
}



