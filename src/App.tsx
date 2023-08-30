import { Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar"
import Contacts from './components/Contacts'
import ChartsAndMaps from './components/ChartsAndMaps'

function App() {

  return (
    <div className='flex items-start bg-neutral-100 h-screen p-6 gap-4'>
      <div>
        <Navbar />
      </div>
      <div className='p-4'>
        <Routes>
          <Route path='/' element={<Contacts />} />
          <Route path='contacts' element={<Contacts />} />
          <Route path='charts-and-maps' element={<ChartsAndMaps />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
