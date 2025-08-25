import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Terminal, TestTube, BarChart3, Settings, Info } from 'lucide-react'

interface TerminalLayoutProps {
  children: React.ReactNode
}

const TerminalLayout: React.FC<TerminalLayoutProps> = ({ children }) => {
  const location = useLocation()

  const navItems = [
    { path: '/', label: 'Home', icon: Terminal },
    { path: '/test', label: 'Test', icon: TestTube },
    { path: '/results', label: 'Results', icon: BarChart3 },
    { path: '/settings', label: 'Settings', icon: Settings },
    { path: '/about', label: 'About', icon: Info }
  ]

  return (
    <div className="min-h-screen terminal-window crt-effect">
      {/* CRT Scanline Effect */}
      <div className="scanline"></div>
      
      {/* Header */}
      <header className="border-b border-terminal-text p-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between"
        >
          <div className="flex items-center space-x-3">
            <Terminal className="w-8 h-8 text-terminal-text" />
            <h1 className="text-2xl font-bold text-terminal-text text-glow">
              TuringTest for LLMs
            </h1>
          </div>
          <div className="text-terminal-text-dim text-sm">
            AI Intelligence Evaluation Platform
          </div>
        </motion.div>
      </header>

      {/* Navigation */}
      <nav className="border-b border-terminal-text-dim p-2">
        <div className="flex space-x-1">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = location.pathname === item.path
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-2 px-3 py-2 rounded transition-all duration-200 ${
                  isActive
                    ? 'bg-terminal-text text-terminal-bg border-glow'
                    : 'text-terminal-text hover:bg-terminal-text hover:text-terminal-bg'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="hidden sm:inline">{item.label}</span>
              </Link>
            )
          })}
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="border-t border-terminal-text-dim p-4 text-center text-terminal-text-dim text-sm">
        <div className="flex items-center justify-center space-x-4">
          <span>© 2024 TuringTest for LLMs</span>
          <span>•</span>
          <span>AI Research Platform</span>
          <span>•</span>
          <span>Version 1.0.0</span>
        </div>
      </footer>
    </div>
  )
}

export default TerminalLayout
