import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import TerminalLayout from './components/layout/TerminalLayout'
import HomePage from './pages/HomePage'
import TestPage from './pages/TestPage'
import ResultsPage from './pages/ResultsPage'
import SettingsPage from './pages/SettingsPage'
import AboutPage from './pages/AboutPage'

function App() {
  return (
    <div className="min-h-screen bg-terminal-bg">
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <TerminalLayout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/test" element={<TestPage />} />
              <Route path="/results" element={<ResultsPage />} />
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
          </TerminalLayout>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default App
