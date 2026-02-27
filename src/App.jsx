import { RouterProvider } from 'react-router'
import './App.css'
import { router } from './routes/approute'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import AuthProvider from './context/Authcontext'
const queryClient= new QueryClient()


function App() {


  return <>
      <QueryClientProvider client={queryClient}>
    <AuthProvider>
        <RouterProvider router={router} />

    </AuthProvider>
      </QueryClientProvider>

  </>

}

export default App
