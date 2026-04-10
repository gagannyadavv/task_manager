import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import TaskApp from './pages/TaskApp'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/app" element={<TaskApp />} />
    </Routes>
  )
}

export default App
