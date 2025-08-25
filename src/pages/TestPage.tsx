import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Play, Pause, RotateCcw, Download, BarChart3 } from 'lucide-react'
import { testCategories, testQuestions } from '../data/knowledgeBase'
import { TestCategory, TestQuestion } from '../types'

const TestPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('')
  const [currentQuestion, setCurrentQuestion] = useState<number>(0)
  const [isTestActive, setIsTestActive] = useState(false)
  const [userAnswer, setUserAnswer] = useState('')
  const [testResults, setTestResults] = useState<any[]>([])

  const handleStartTest = () => {
    if (!selectedCategory) return
    setIsTestActive(true)
    setCurrentQuestion(0)
    setTestResults([])
  }

  const handleSubmitAnswer = () => {
    if (!userAnswer.trim()) return
    
    const question = testQuestions.find(q => q.categoryId === selectedCategory)
    if (question) {
      setTestResults([...testResults, {
        question: question.question,
        userAnswer,
        timestamp: new Date()
      }])
    }
    
    setUserAnswer('')
    setCurrentQuestion(currentQuestion + 1)
  }

  const handleResetTest = () => {
    setIsTestActive(false)
    setCurrentQuestion(0)
    setTestResults([])
    setUserAnswer('')
  }

  const getQuestionsByCategory = (categoryId: string) => {
    return testQuestions.filter(q => q.categoryId === categoryId)
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-terminal-text text-glow mb-8">
        AI Intelligence Testing
      </h1>

      {!isTestActive ? (
        // Test Setup
        <div className="space-y-6">
          <div className="border border-terminal-text p-6 rounded">
            <h2 className="text-xl font-bold text-terminal-text mb-4">Select Test Category</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {testCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`p-4 border rounded text-left transition-all ${
                    selectedCategory === category.id
                      ? 'border-terminal-text bg-terminal-text text-terminal-bg'
                      : 'border-terminal-text-dim text-terminal-text hover:border-terminal-text'
                  }`}
                >
                  <h3 className="font-bold">{category.name}</h3>
                  <p className="text-sm opacity-80">{category.description}</p>
                  <span className="text-xs opacity-60">Difficulty: {category.difficulty}</span>
                </button>
              ))}
            </div>
          </div>

          {selectedCategory && (
            <div className="border border-terminal-text p-6 rounded">
              <h3 className="text-lg font-bold text-terminal-text mb-4">
                {testCategories.find(c => c.id === selectedCategory)?.name} Test
              </h3>
              <p className="text-terminal-text-dim mb-4">
                {getQuestionsByCategory(selectedCategory).length} questions available
              </p>
              <button
                onClick={handleStartTest}
                className="retro-button text-lg px-6 py-3"
              >
                <Play className="w-5 h-5 mr-2" />
                Start Test
              </button>
            </div>
          )}
        </div>
      ) : (
        // Active Test
        <div className="space-y-6">
          <div className="flex items-center justify-between border border-terminal-text p-4 rounded">
            <div className="text-terminal-text">
              <span className="font-bold">Category:</span> {testCategories.find(c => c.id === selectedCategory)?.name}
            </div>
            <div className="text-terminal-text">
              <span className="font-bold">Question:</span> {currentQuestion + 1} / {getQuestionsByCategory(selectedCategory).length}
            </div>
            <div className="flex space-x-2">
              <button
                onClick={handleResetTest}
                className="retro-button px-4 py-2"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {currentQuestion < getQuestionsByCategory(selectedCategory).length ? (
            <div className="border border-terminal-text p-6 rounded">
              <h3 className="text-xl font-bold text-terminal-text mb-4">
                Question {currentQuestion + 1}
              </h3>
              <p className="text-terminal-text text-lg mb-6">
                {getQuestionsByCategory(selectedCategory)[currentQuestion]?.question}
              </p>
              
              <div className="space-y-4">
                <textarea
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  placeholder="Type your answer here..."
                  className="w-full h-32 command-line border border-terminal-text p-4 rounded resize-none"
                />
                
                <button
                  onClick={handleSubmitAnswer}
                  disabled={!userAnswer.trim()}
                  className="retro-button text-lg px-6 py-3 disabled:opacity-50"
                >
                  Submit Answer
                </button>
              </div>
            </div>
          ) : (
            // Test Complete
            <div className="border border-terminal-text p-6 rounded text-center">
              <h3 className="text-2xl font-bold text-terminal-text mb-4">
                Test Complete!
              </h3>
              <p className="text-terminal-text-dim mb-6">
                You have completed the {testCategories.find(c => c.id === selectedCategory)?.name} test.
              </p>
              
              <div className="space-y-4">
                <button
                  onClick={() => window.location.href = '/results'}
                  className="retro-button text-lg px-6 py-3 mr-4"
                >
                  <BarChart3 className="w-5 h-5 mr-2" />
                  View Results
                </button>
                
                <button
                  onClick={handleResetTest}
                  className="retro-button text-lg px-6 py-3"
                >
                  <RotateCcw className="w-5 h-5 mr-2" />
                  Take Another Test
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default TestPage
