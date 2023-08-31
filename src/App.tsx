import { Routes, Route, Navigate } from 'react-router-dom'
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import Navbar from "./components/Navbar"
import Contacts from './features/contacts/ContactsView'
import ChartsAndMaps from './components/ChartsAndMaps'

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className='flex bg-neutral-100 min-h-screen p-6 gap-4 flex-col sm:flex-row'>
        <div>
          <Navbar />
        </div>
        <div className='p-4 flex-1'>
          <Routes>
            <Route path='/' element={<Navigate to="/contacts" />} />
            <Route path='contacts' element={<Contacts />} />
            <Route path='charts-and-maps' element={<ChartsAndMaps />} />
            <Route path='*' element={<Navigate to="/contacts" />} />
          </Routes>
        </div>
      </div>
    </QueryClientProvider>
  )
}

export default App
