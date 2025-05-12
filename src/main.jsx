
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import  Control  from './control/Control.jsx'

createRoot(document.getElementById('root')).render(
  <Control>
    <App />
  </Control>
)
