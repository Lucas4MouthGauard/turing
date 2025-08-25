import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Play, BookOpen, BarChart3, Zap } from 'lucide-react'

const HomePage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-terminal-text text-glow mb-6">
          Welcome to TuringTest
        </h1>
        <p className="text-xl text-terminal-text-dim mb-8 max-w-2xl mx-auto">
          Evaluate Large Language Models through authentic retro computer interfaces. 
          Test AI intelligence using classic terminal interactions.
        </p>
        <Link
          to="/test"
          className="inline-flex items-center space-x-2 retro-button text-lg px-8 py-4"
        >
          <Play className="w-5 h-5" />
          <span>Start Testing</span>
        </Link>
      </motion.div>

      {/* Features Grid */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid md:grid-cols-2 gap-8 mb-12"
      >
        <div className="border border-terminal-text p-6 rounded">
          <div className="flex items-center space-x-3 mb-4">
            <Terminal className="w-8 h-8 text-terminal-text" />
            <h3 className="text-xl font-bold text-terminal-text">Retro Interface</h3>
          </div>
          <p className="text-terminal-text-dim">
            Experience authentic DOS/UNIX-style terminal interactions with CRT effects and retro aesthetics.
          </p>
        </div>

        <div className="border border-terminal-text p-6 rounded">
          <div className="flex items-center space-x-3 mb-4">
            <Zap className="w-8 h-8 text-terminal-text" />
            <h3 className="text-xl font-bold text-terminal-text">AI Evaluation</h3>
          </div>
          <p className="text-terminal-text-dim">
            Comprehensive testing of LLM capabilities including logic, reasoning, and domain knowledge.
          </p>
        </div>

        <div className="border border-terminal-text p-6 rounded">
          <div className="flex items-center space-x-3 mb-4">
            <BarChart3 className="w-8 h-8 text-terminal-text" />
            <h3 className="text-xl font-bold text-terminal-text">Data Analysis</h3>
          </div>
          <p className="text-terminal-text-dim">
            Detailed performance metrics and scientific reports for research and development.
          </p>
        </div>

        <div className="border border-terminal-text p-6 rounded">
          <div className="flex items-center space-x-3 mb-4">
            <BookOpen className="w-8 h-8 text-terminal-text" />
            <h3 className="text-xl font-bold text-terminal-text">Knowledge Testing</h3>
          </div>
          <p className="text-terminal-text-dim">
            Test AI knowledge in AI fundamentals, cryptocurrency, and logical reasoning.
          </p>
        </div>
      </motion.div>

      {/* Quick Start */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="border border-terminal-text p-6 rounded"
      >
        <h2 className="text-2xl font-bold text-terminal-text mb-4">Quick Start Guide</h2>
        <div className="space-y-3 text-terminal-text-dim">
          <p>1. <span className="text-terminal-text">Choose Test Category:</span> Select from AI Basics, Crypto, or Logic</p>
          <p>2. <span className="text-terminal-text">Start Testing:</span> Answer questions through the retro terminal interface</p>
          <p>3. <span className="text-terminal-text">View Results:</span> Analyze performance metrics and generate reports</p>
          <p>4. <span className="text-terminal-text">Export Data:</span> Download results for research and analysis</p>
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="text-center mt-12"
      >
        <p className="text-terminal-text-dim mb-4">
          Ready to evaluate AI intelligence through authentic retro computing?
        </p>
        <Link
          to="/test"
          className="retro-button text-lg px-8 py-3"
        >
          Begin Turing Test
        </Link>
      </motion.div>
    </div>
  )
}

export default HomePage
