import { BrowserRouter } from 'react-router-dom'

import { Router } from './Router'
import { AuthProvider } from './context/AuthContext'

export function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </AuthProvider>
  )
}