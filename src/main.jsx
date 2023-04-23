import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ReducerProvider } from './reducer/context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ReducerProvider>
    <App />
  </ReducerProvider>,
)
