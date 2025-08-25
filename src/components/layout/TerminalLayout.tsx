import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Terminal, TestTube, BarChart3, Settings, Info, Twitter } from 'lucide-react'

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

  const handleTwitterClick = () => {
    window.open('https://x.com/turing4llm', '_blank')
  }

  const handleTuringTokenClick = () => {
    // 跳转到Pump.fun页面
    window.open('https://pump.fun/coin/G8GS6o1HrjHrrZGpjq4N241wJsi4N65TKTbQd5gYpump', '_blank')
  }

  return (
    <div className="terminal-window">
      {/* Header */}
      <header style={{ borderBottom: '1px solid #00ff00', padding: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Terminal style={{ width: '32px', height: '32px', color: '#00ff00' }} />
            <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: '#00ff00' }}>
              TuringTest for LLMs
            </h1>
          </div>
          
          {/* Social Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ color: '#00cc00', fontSize: '14px' }}>
              AI Intelligence Evaluation Platform
            </div>
            
            {/* Twitter Button */}
            <button
              onClick={handleTwitterClick}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                backgroundColor: 'transparent',
                border: '1px solid #00ff00',
                color: '#00ff00',
                padding: '6px 12px',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '12px',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#00ff00'
                e.currentTarget.style.color = '#0a0a0a'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent'
                e.currentTarget.style.color = '#00ff00'
              }}
            >
              <Twitter style={{ width: '14px', height: '14px' }} />
              <span>Twitter</span>
            </button>
            
            {/* $Turing4LLM Token Button */}
            <button
              onClick={handleTuringTokenClick}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                backgroundColor: 'transparent',
                border: '1px solid #00cc00',
                color: '#00cc00',
                padding: '6px 12px',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '12px',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#00cc00'
                e.currentTarget.style.color = '#0a0a0a'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent'
                e.currentTarget.style.color = '#00cc00'
              }}
            >
              <span style={{ fontWeight: 'bold' }}>$</span>
              <span>Turing4LLM</span>
            </button>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav style={{ borderBottom: '1px solid #00cc00', padding: '8px' }}>
        <div style={{ display: 'flex', gap: '4px' }}>
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = location.pathname === item.path
            
            return (
              <Link
                key={item.path}
                to={item.path}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '8px 12px',
                  borderRadius: '4px',
                  color: isActive ? '#0a0a0a' : '#00ff00',
                  backgroundColor: isActive ? '#00ff00' : 'transparent',
                  textDecoration: 'none'
                }}
              >
                <Icon style={{ width: '16px', height: '16px' }} />
                <span style={{ display: window.innerWidth > 640 ? 'inline' : 'none' }}>
                  {item.label}
                </span>
              </Link>
            )
          })}
        </div>
      </nav>

      {/* Main Content */}
      <main style={{ padding: '24px' }}>
        {children}
      </main>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid #00cc00', padding: '16px', textAlign: 'center', color: '#00cc00', fontSize: '14px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
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
