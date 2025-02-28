import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./assets/bootstrap.min.css"
import { Provider } from 'react-redux'
import store from './services/store.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
    
  <React.StrictMode>
    <Provider store={store}>
        <App/>
    </Provider> 
  </React.StrictMode>,

)
