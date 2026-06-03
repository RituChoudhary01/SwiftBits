import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { AppProvider } from './context/AppContext.tsx'
import "leaflet/dist/leaflet.css";
import { SocketProvider } from './context/SocketContext.tsx'

// Re-export from config so existing imports like `import { authService } from "../main"` still work
export { authService, restaurantService, utilsService, realtimeService, riderService, aminService } from './config.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GoogleOAuthProvider clientId="943535502763-4p110db19h4uqupd4ncvjdmgth9hpffh.apps.googleusercontent.com">
      <AppProvider>
        <SocketProvider>
          <App />
        </SocketProvider>
      </AppProvider>
    </GoogleOAuthProvider>
  </StrictMode>,
)
