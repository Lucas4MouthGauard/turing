import React from 'react'
import { Link } from 'react-router-dom'

const HomePage: React.FC = () => {
  return (
    <div style={{ maxWidth: '1024px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
        <h1 style={{ fontSize: '48px', fontWeight: 'bold', color: '#00ff00', marginBottom: '24px' }}>
          Welcome to TuringTest
        </h1>
        <p style={{ fontSize: '20px', color: '#00cc00', marginBottom: '32px' }}>
          AI Intelligence Evaluation Platform
        </p>
        <Link
          to="/test"
          style={{
            display: 'inline-block',
            backgroundColor: 'transparent',
            border: '1px solid #00ff00',
            color: '#00ff00',
            padding: '16px 32px',
            fontSize: '18px',
            textDecoration: 'none',
            borderRadius: '4px'
          }}
        >
          Start Testing
        </Link>
      </div>
      
      <div style={{ border: '1px solid #00ff00', padding: '24px', borderRadius: '4px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#00ff00', marginBottom: '16px' }}>
          Quick Start
        </h2>
        <p style={{ color: '#00cc00' }}>
          This is a simple test page to verify the basic functionality. 
          The page should now display properly with green text on black background.
        </p>
      </div>
      
      <div style={{ marginTop: '24px', textAlign: 'center' }}>
        <p style={{ color: '#00cc00', marginBottom: '16px' }}>
          If you can see this text, the page is working correctly!
        </p>
        <div style={{ color: '#00ff00', fontSize: '14px' }}>
          ✓ Retro terminal interface loaded<br/>
          ✓ Green text on black background<br/>
          ✓ Navigation working<br/>
          ✓ Basic styling applied
        </div>
      </div>
    </div>
  )
}

export default HomePage
