import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import APP from './app'

render( < BrowserRouter > < APP / > < /BrowserRouter> , document.querySelector('#root'))