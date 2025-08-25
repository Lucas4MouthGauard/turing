// AI Model Types
export interface AIModel {
  id: string
  name: string
  provider: string
  version: string
  capabilities: string[]
  maxTokens: number
  temperature: number
}

// Test Categories
export interface TestCategory {
  id: string
  name: string
  description: string
  difficulty: 'easy' | 'medium' | 'hard'
  domain: 'general' | 'technical' | 'creative' | 'ethical' | 'crypto'
}

// Test Question
export interface TestQuestion {
  id: string
  categoryId: string
  question: string
  expectedAnswer?: string
  difficulty: 'easy' | 'medium' | 'hard'
  tags: string[]
  context?: string
}

// Test Session
export interface TestSession {
  id: string
  modelId: string
  startTime: Date
  endTime?: Date
  questions: TestQuestion[]
  responses: TestResponse[]
  scores: TestScores
  status: 'active' | 'completed' | 'paused'
}

// AI Response
export interface TestResponse {
  questionId: string
  question: string
  response: string
  responseTime: number
  tokensUsed: number
  confidence: number
  timestamp: Date
}

// Test Scores
export interface TestScores {
  overall: number
  categories: {
    [categoryId: string]: {
      score: number
      accuracy: number
      responseTime: number
      questionsAnswered: number
    }
  }
  metrics: {
    averageResponseTime: number
    totalTokensUsed: number
    logicalConsistency: number
    emotionalIntelligence: number
    languageProficiency: number
    cryptoKnowledge: number
  }
}

// User Settings
export interface UserSettings {
  language: 'en' | 'zh'
  theme: 'retro' | 'modern' | 'classic'
  soundEnabled: boolean
  scanlineEffect: boolean
  autoSave: boolean
  defaultModel: string
}

// Crypto Knowledge Areas
export interface CryptoKnowledge {
  blockchain: {
    basic: string[]
    advanced: string[]
    technical: string[]
  }
  cryptocurrencies: {
    bitcoin: string[]
    ethereum: string[]
    altcoins: string[]
  }
  defi: {
    protocols: string[]
    risks: string[]
    opportunities: string[]
  }
  nfts: {
    concepts: string[]
    useCases: string[]
    market: string[]
  }
}

// AI Knowledge Areas
export interface AIKnowledge {
  llm: {
    architecture: string[]
    training: string[]
    limitations: string[]
  }
  chatgpt: {
    capabilities: string[]
    useCases: string[]
    ethical: string[]
  }
  machineLearning: {
    basics: string[]
    algorithms: string[]
    applications: string[]
  }
  aiSafety: {
    alignment: string[]
    risks: string[]
    governance: string[]
  }
}

// Test Results Export
export interface TestReport {
  sessionId: string
  modelName: string
  testDate: Date
  summary: string
  detailedScores: TestScores
  recommendations: string[]
  exportFormat: 'pdf' | 'json' | 'csv'
}
