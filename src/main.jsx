import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {ContextApi} from './components/ContextApi.jsx'
import { Provider } from 'react-redux'
import store from "./store.js"


createRoot(document.getElementById('root')).render(
  <ContextApi>
    <Provider store={store}>
    <App />
    </Provider>
  </ContextApi>

)
