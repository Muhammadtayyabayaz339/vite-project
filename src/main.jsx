import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from'./App.jsx'
// import Tayyab from'./Tayyab.jsx'
// import Weather from './Weather.jsx'
// import TwoAPIs from'./TwoAPIs.jsx'
// import Portfolio from'./Portfolio.jsx'
// import Finalproject from'./Finalproject.jsx'
createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App/>
    </StrictMode>
)