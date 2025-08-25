import React from 'react'
import { motion } from 'framer-motion'
import { Download, Share2, TrendingUp } from 'lucide-react'

const ResultsPage: React.FC = () => {
  // Mock data - in real app this would come from state/props
  const mockResults = {
    overallScore: 85,
    categoryScores: [
      { name: 'AI Basics', score: 90, questions: 3 },
      { name: 'Crypto Basics', score: 80, questions: 2 },
      { name: 'Logical Reasoning', score: 85, questions: 1 }
    ],
    metrics: {
      averageResponseTime: '2.3s',
      totalQuestions: 6,
      correctAnswers: 5,
      accuracy: '83.3%'
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-terminal-text text-glow mb-8">
        Test Results Analysis
      </h1>

      {/* Overall Score */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="border border-terminal-text p-6 rounded mb-8 text-center"
      >
        <h2 className="text-2xl font-bold text-terminal-text mb-4">Overall Performance</h2>
        <div className="text-6xl font-bold text-terminal-text text-glow mb-2">
          {mockResults.overallScore}%
        </div>
        <p className="text-terminal-text-dim">
          {mockResults.metrics.correctAnswers} out of {mockResults.metrics.totalQuestions} questions correct
        </p>
      </motion.div>

      {/* Category Breakdown */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid md:grid-cols-2 gap-6 mb-8"
      >
        {mockResults.categoryScores.map((category, index) => (
          <div key={index} className="border border-terminal-text p-4 rounded">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-bold text-terminal-text">{category.name}</h3>
              <span className="text-2xl font-bold text-terminal-text">{category.score}%</span>
            </div>
            <div className="w-full bg-terminal-text-dim rounded-full h-2 mb-2">
              <div 
                className="bg-terminal-text h-2 rounded-full transition-all duration-500"
                style={{ width: `${category.score}%` }}
              ></div>
            </div>
            <p className="text-sm text-terminal-text-dim">
              {category.questions} questions • {category.score >= 80 ? 'Excellent' : category.score >= 60 ? 'Good' : 'Needs Improvement'}
            </p>
          </div>
        ))}
      </motion.div>

      {/* Performance Metrics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="border border-terminal-text p-6 rounded mb-8"
      >
        <h3 className="text-xl font-bold text-terminal-text mb-4">Performance Metrics</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-terminal-text-dim">Accuracy:</span>
              <span className="text-terminal-text font-bold">{mockResults.metrics.accuracy}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-terminal-text-dim">Average Response Time:</span>
              <span className="text-terminal-text font-bold">{mockResults.metrics.averageResponseTime}</span>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-terminal-text-dim">Total Questions:</span>
              <span className="text-terminal-text font-bold">{mockResults.metrics.totalQuestions}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-terminal-text-dim">Correct Answers:</span>
              <span className="text-terminal-text font-bold">{mockResults.metrics.correctAnswers}</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Recommendations */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="border border-terminal-text p-6 rounded mb-8"
      >
        <h3 className="text-xl font-bold text-terminal-text mb-4">Recommendations</h3>
        <div className="space-y-3 text-terminal-text-dim">
          <p>• <span className="text-terminal-text">Focus on Crypto Basics:</span> Consider reviewing blockchain fundamentals and cryptocurrency concepts</p>
          <p>• <span className="text-terminal-text">Practice Logical Reasoning:</span> Work on pattern recognition and sequence problems</p>
          <p>• <span className="text-terminal-text">AI Knowledge:</span> Your understanding of AI fundamentals is strong, keep it up!</p>
        </div>
      </motion.div>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="flex flex-wrap gap-4 justify-center"
      >
        <button className="retro-button text-lg px-6 py-3">
          <Download className="w-5 h-5 mr-2" />
          Export Report
        </button>
        
        <button className="retro-button text-lg px-6 py-3">
          <Share2 className="w-5 h-5 mr-2" />
          Share Results
        </button>
        
        <button className="retro-button text-lg px-6 py-3">
          <TrendingUp className="w-5 h-5 mr-2" />
          View Trends
        </button>
      </motion.div>
    </div>
  )
}

export default ResultsPage
