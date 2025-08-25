import { TestQuestion, TestCategory } from '../types'

// Test Categories
export const testCategories: TestCategory[] = [
  {
    id: 'ai-basics',
    name: 'AI Basics',
    description: 'Basic AI and LLM concepts',
    difficulty: 'easy',
    domain: 'technical'
  },
  {
    id: 'crypto-basics',
    name: 'Crypto Basics',
    description: 'Blockchain and cryptocurrency fundamentals',
    difficulty: 'medium',
    domain: 'crypto'
  },
  {
    id: 'logical-reasoning',
    name: 'Logical Reasoning',
    description: 'Logic and problem-solving',
    difficulty: 'medium',
    domain: 'general'
  }
]

// Test Questions
export const testQuestions: TestQuestion[] = [
  {
    id: 'ai-001',
    categoryId: 'ai-basics',
    question: 'What is the main difference between narrow AI and general AI?',
    expectedAnswer: 'Narrow AI is designed for specific tasks while general AI can perform any intellectual task.',
    difficulty: 'easy',
    tags: ['ai', 'definitions']
  },
  {
    id: 'ai-002',
    categoryId: 'ai-basics',
    question: 'What does LLM stand for and what is its purpose?',
    expectedAnswer: 'LLM stands for Large Language Model, designed to understand and generate human-like text.',
    difficulty: 'easy',
    tags: ['llm', 'language']
  },
  {
    id: 'ai-003',
    categoryId: 'ai-basics',
    question: 'What are the main limitations of ChatGPT?',
    expectedAnswer: 'Knowledge cutoff dates, potential hallucinations, no real-time data access.',
    difficulty: 'medium',
    tags: ['chatgpt', 'limitations']
  },
  {
    id: 'crypto-001',
    categoryId: 'crypto-basics',
    question: 'What is blockchain technology?',
    expectedAnswer: 'A decentralized, distributed ledger that records transactions across multiple computers.',
    difficulty: 'easy',
    tags: ['blockchain', 'decentralized']
  },
  {
    id: 'crypto-002',
    categoryId: 'crypto-basics',
    question: 'What is the difference between Bitcoin and Ethereum?',
    expectedAnswer: 'Bitcoin is digital currency, Ethereum is a platform for smart contracts and dApps.',
    difficulty: 'medium',
    tags: ['bitcoin', 'ethereum']
  },
  {
    id: 'logic-001',
    categoryId: 'logical-reasoning',
    question: 'What is the next number: 2, 4, 8, 16, ?',
    expectedAnswer: '32. Each number is multiplied by 2.',
    difficulty: 'easy',
    tags: ['logic', 'sequences']
  }
]
