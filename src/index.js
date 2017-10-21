'use strict'

import './sass/main.scss'

import App from './app'

const app = new App(document.querySelector('[data-js="app"]'))
app.init()
