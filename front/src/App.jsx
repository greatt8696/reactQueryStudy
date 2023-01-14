import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter } from 'react-router-dom'
import Router from './router'

const queryClient = new QueryClient();
function App() {
  return (
    // QueryClientProvider : react-query의 store (redux-store 또는 context 역할) 
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
