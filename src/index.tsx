import { h, render } from "preact";
import Main from "./components/Main"

declare const module: any

const mountNode = document.getElementById('root');

render(<Main />, mountNode, mountNode.lastChild as Element);

// Hot Module Replacement
if (module.hot) {
    module.hot.accept();
}



