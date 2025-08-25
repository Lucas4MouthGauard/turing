import React from 'react'
import { motion } from 'framer-motion'
import { Github, Mail, Users, Code, BookOpen, Target } from 'lucide-react'

const AboutPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-terminal-text text-glow mb-8">
        About TuringTest for LLMs
      </h1>

      {/* Project Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="border border-terminal-text p-6 rounded mb-8"
      >
        <h2 className="text-xl font-bold text-terminal-text mb-4 flex items-center">
          <Target className="w-5 h-5 mr-2" />
          Project Mission
        </h2>
        <p className="text-terminal-text-dim leading-relaxed">
          TuringTest for LLMs is a research platform designed to evaluate artificial intelligence 
          through authentic retro computer interfaces. Our mission is to provide researchers, 
          developers, and academics with a reliable tool for assessing LLM intelligence using 
          classic terminal interactions that eliminate modern UI distractions.
        </p>
      </motion.div>

      {/* Key Features */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="border border-terminal-text p-6 rounded mb-8"
      >
        <h2 className="text-xl font-bold text-terminal-text mb-4 flex items-center">
          <Code className="w-5 h-5 mr-2" />
          Core Features
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <p className="text-terminal-text-dim">• Retro Terminal Interface</p>
            <p className="text-terminal-text-dim">• AI Intelligence Testing</p>
            <p className="text-terminal-text-dim">• Multi-domain Knowledge Assessment</p>
          </div>
          <div className="space-y-2">
            <p className="text-terminal-text-dim">• Scientific Data Analysis</p>
            <p className="text-terminal-text-dim">• Performance Metrics</p>
            <p className="text-terminal-text-dim">• Export & Reporting</p>
          </div>
        </div>
      </motion.div>

      {/* Technology Stack */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="border border-terminal-text p-6 rounded mb-8"
      >
        <h2 className="text-xl font-bold text-terminal-text mb-4 flex items-center">
          <Code className="w-5 h-5 mr-2" />
          Technology Stack
        </h2>
        <div className="grid md:grid-cols-3 gap-4 text-center">
          <div className="p-4 border border-terminal-text-dim rounded">
            <h3 className="font-bold text-terminal-text mb-2">Frontend</h3>
            <p className="text-terminal-text-dim text-sm">React + TypeScript</p>
            <p className="text-terminal-text-dim text-sm">Tailwind CSS</p>
            <p className="text-terminal-text-dim text-sm">Framer Motion</p>
          </div>
          <div className="p-4 border border-terminal-text-dim rounded">
            <h3 className="font-bold text-terminal-text mb-2">Build Tools</h3>
            <p className="text-terminal-text-dim text-sm">Vite</p>
            <p className="text-terminal-text-dim text-sm">ESLint</p>
            <p className="text-terminal-text-dim text-sm">PostCSS</p>
          </div>
          <div className="p-4 border border-terminal-text-dim rounded">
            <h3 className="font-bold text-terminal-text mb-2">Testing</h3>
            <p className="text-terminal-text-dim text-sm">Vitest</p>
            <p className="text-terminal-text-dim text-sm">React Testing Library</p>
            <p className="text-terminal-text-dim text-sm">Coverage Reports</p>
          </div>
        </div>
      </motion.div>

      {/* Research Areas */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="border border-terminal-text p-6 rounded mb-8"
      >
        <h2 className="text-xl font-bold text-terminal-text mb-4 flex items-center">
          <BookOpen className="w-5 h-5 mr-2" />
          Research Areas
        </h2>
        <div className="space-y-3 text-terminal-text-dim">
          <p>• <span className="text-terminal-text">AI Fundamentals:</span> Understanding of artificial intelligence concepts and limitations</p>
          <p>• <span className="text-terminal-text">Large Language Models:</span> Architecture, training, and capabilities assessment</p>
          <p>• <span className="text-terminal-text">Cryptocurrency Knowledge:</span> Blockchain, DeFi, and digital asset understanding</p>
          <p>• <span className="text-terminal-text">Logical Reasoning:</span> Pattern recognition and problem-solving abilities</p>
          <p>• <span className="text-terminal-text">Human-AI Interaction:</span> Natural language processing and response quality</p>
        </div>
      </motion.div>

      {/* Team */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="border border-terminal-text p-6 rounded mb-8"
      >
        <h2 className="text-xl font-bold text-terminal-text mb-4 flex items-center">
          <Users className="w-5 h-5 mr-2" />
          Development Team
        </h2>
        <p className="text-terminal-text-dim mb-4">
          TuringTest for LLMs is developed by a team of AI researchers, software engineers, 
          and UX designers committed to advancing AI evaluation methodologies.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 border border-terminal-text-dim rounded">
            <h3 className="font-bold text-terminal-text">AI Research</h3>
            <p className="text-terminal-text-dim text-sm">LLM evaluation methodologies</p>
            <p className="text-terminal-text-dim text-sm">Intelligence assessment frameworks</p>
          </div>
          <div className="p-4 border border-terminal-text-dim rounded">
            <h3 className="font-bold text-terminal-text">Software Development</h3>
            <p className="text-terminal-text-dim text-sm">Modern web technologies</p>
            <p className="text-terminal-text-dim text-sm">Retro interface design</p>
          </div>
        </div>
      </motion.div>

      {/* Contact & Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="border border-terminal-text p-6 rounded text-center"
      >
        <h2 className="text-xl font-bold text-terminal-text mb-4">Get Involved</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#"
            className="retro-button px-6 py-3"
          >
            <Github className="w-5 h-5 mr-2" />
            GitHub
          </a>
          
          <a
            href="#"
            className="retro-button px-6 py-3"
          >
            <Mail className="w-5 h-5 mr-2" />
            Contact
          </a>
          
          <a
            href="#"
            className="retro-button px-6 py-3"
          >
            <BookOpen className="w-5 h-5 mr-2" />
            Documentation
          </a>
        </div>
      </motion.div>
    </div>
  )
}

export default AboutPage
