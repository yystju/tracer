// import _ from 'lodash'
import printMe from './print.js'

import './style.css'

import CharImage from './char.png'
import ConfigImage from './config.png'

async function component() {
    const { default: _ } = await import(/* webpackChunkName: "lodash" */ 'lodash')

    console.log(_.join(['App', 'module', 'loaded!'], ' '));
    const element = document.createElement('div')
    element.innerHTML = 'This is a test.'
    element.classList.add('hello')

    const btn = document.createElement('button')

    btn.innerHTML = 'Click me and check the console!'
    btn.onclick = printMe
    element.appendChild(btn)

    const charIcon = new Image();
    charIcon.src = CharImage;
    charIcon.width=20;
    charIcon.height=20;
    element.appendChild(charIcon);

    const configIcon = new Image();
    configIcon.src = ConfigImage;
    configIcon.width=20;
    configIcon.height=20;
    element.appendChild(configIcon);

    return element;
}

component().then(c => {
    document.body.appendChild(c)
})
