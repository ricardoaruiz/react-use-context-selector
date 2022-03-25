import React from 'react'
import ReactDOM from 'react-dom'

import { CounterContextProvider } from './contexts/Counter'
import App from './App'

import './index.scss'

ReactDOM.render(
  <CounterContextProvider>
    <App />
  </CounterContextProvider>,
  document.getElementById('root')
)
