import { Routes, Route } from 'react-router-dom'
import TerminalLayout from './components/layout/TerminalLayout'
import HomePage from './pages/HomePage'

function App() {
  return (
    <div className="min-h-screen bg-terminal-bg">
      <TerminalLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </TerminalLayout>
    </div>
  )
}

export default App
