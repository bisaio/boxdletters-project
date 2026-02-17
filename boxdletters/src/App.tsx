import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/layout/Navbar'

function App() {

  return (
    <div className="card">
      <Navbar />
      <Outlet />
    </div>
  )
}

export default App
