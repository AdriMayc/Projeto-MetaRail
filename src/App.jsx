import './App.css'
import Routes from "./routes";
import { queryClient } from './queryClient';
import { QueryClientProvider } from 'react-query';

function App() {

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Routes />
      </QueryClientProvider>
    </>
  )
}

export default App
