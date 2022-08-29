import './style.css';
import printMe from './print.js';
import { cube } from './math.js';

function component() {
    var element = document.createElement('div');
    var element2 = document.createElement('pre');
    var btn = document.createElement('button');
    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    // Lodash, now imported by this script
    element.innerHTML = "Hello webpack"
    btn.innerHTML = 'Click me and check the console!';
    element.classList.add('hello');
    btn.onclick = printMe;
    element.appendChild(btn);
    element2.innerHTML = [
      'Hello webpack!',
      '5 cubed is equal to ' + cube(5)
    ].join('\n\n');
    return element;
}

document.body.appendChild(component());