import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { AppProvider } from './context/AppContext.tsx'
import "leaflet/dist/leaflet.css";
import { SocketProvider } from './context/SocketContext.tsx'
import ErrorBoundary from './components/ErrorBoundary.tsx'

// Re-export from config so existing imports like `import { authService } from "../main"` still work
export { authService, restaurantService, utilsService, realtimeService, riderService, aminService } from './config.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GoogleOAuthProvider clientId="786836782102-hqr4k1v2p4qs0tr0p0kri4salptua1bl.apps.googleusercontent.com">
      <AppProvider>
        <SocketProvider>
          <ErrorBoundary>
            <App />
          </ErrorBoundary>
        </SocketProvider>
      </AppProvider>
    </GoogleOAuthProvider>
  </StrictMode>,
)
