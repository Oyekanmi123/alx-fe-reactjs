import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UserProfile from './components/UserProfile'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <UserProfile />
  </StrictMode>,
)
