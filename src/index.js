// let's go!
import React from 'react'
import { render } from 'react-dom'

import './css/style.css'

import Router from './components/Router'
// import Router from './components-hooks/Router'
// import Router from './components-random/Router'

render(<Router />, document.querySelector('#main'))