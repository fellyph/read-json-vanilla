'use strict'

import './sass/main.scss'

import App from './js/app'

const app = new App(document.querySelector('[data-js="app"]'), document.querySelector('.filter-cars'))
app.init()
