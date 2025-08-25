#!/bin/bash

echo "🚀 Starting TuringTest for LLMs..."
echo "📁 Project directory: $(pwd)"
echo "🔧 Installing dependencies..."

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📦 Installing npm packages..."
    npm install
fi

echo "🌐 Starting development server..."
echo "📍 Server will be available at: http://localhost:3000"
echo "⏹️  Press Ctrl+C to stop the server"
echo ""

# Start the development server
npm run dev
