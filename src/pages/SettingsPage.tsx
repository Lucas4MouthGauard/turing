import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Save, Volume2, VolumeX, Monitor, Palette } from 'lucide-react'

const SettingsPage: React.FC = () => {
  const [settings, setSettings] = useState({
    language: 'en',
    theme: 'retro',
    soundEnabled: true,
    scanlineEffect: true,
    autoSave: true,
    defaultModel: 'gpt-4'
  })

  const handleSettingChange = (key: string, value: any) => {
    setSettings(prev => ({ ...prev, [key]: value }))
  }

  const handleSaveSettings = () => {
    // In real app, save to localStorage or backend
    console.log('Settings saved:', settings)
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-terminal-text text-glow mb-8">
        Settings & Preferences
      </h1>

      <div className="space-y-6">
        {/* Interface Settings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="border border-terminal-text p-6 rounded"
        >
          <h2 className="text-xl font-bold text-terminal-text mb-4 flex items-center">
            <Monitor className="w-5 h-5 mr-2" />
            Interface Settings
          </h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-terminal-text mb-2">Language</label>
              <select
                value={settings.language}
                onChange={(e) => handleSettingChange('language', e.target.value)}
                className="command-line border border-terminal-text p-2 rounded w-full"
              >
                <option value="en">English</option>
                <option value="zh">中文</option>
              </select>
            </div>

            <div>
              <label className="block text-terminal-text mb-2">Theme</label>
              <select
                value={settings.theme}
                onChange={(e) => handleSettingChange('theme', e.target.value)}
                className="command-line border border-terminal-text p-2 rounded w-full"
              >
                <option value="retro">Retro Terminal</option>
                <option value="modern">Modern</option>
                <option value="classic">Classic</option>
              </select>
            </div>

            <div className="flex items-center justify-between">
              <label className="text-terminal-text">CRT Scanline Effect</label>
              <input
                type="checkbox"
                checked={settings.scanlineEffect}
                onChange={(e) => handleSettingChange('scanlineEffect', e.target.checked)}
                className="w-4 h-4 text-terminal-text bg-transparent border-terminal-text rounded"
              />
            </div>
          </div>
        </motion.div>

        {/* Audio Settings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="border border-terminal-text p-6 rounded"
        >
          <h2 className="text-xl font-bold text-terminal-text mb-4 flex items-center">
            {settings.soundEnabled ? <Volume2 className="w-5 h-5 mr-2" /> : <VolumeX className="w-5 h-5 mr-2" />}
            Audio Settings
          </h2>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <label className="text-terminal-text">Enable Sound Effects</label>
              <input
                type="checkbox"
                checked={settings.soundEnabled}
                onChange={(e) => handleSettingChange('soundEnabled', e.target.checked)}
                className="w-4 h-4 text-terminal-text bg-transparent border-terminal-text rounded"
              />
            </div>
            
            {settings.soundEnabled && (
              <div>
                <label className="block text-terminal-text mb-2">Volume Level</label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  defaultValue="50"
                  className="w-full h-2 bg-terminal-text-dim rounded-lg appearance-none cursor-pointer"
                />
              </div>
            )}
          </div>
        </motion.div>

        {/* AI Model Settings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="border border-terminal-text p-6 rounded"
        >
          <h2 className="text-xl font-bold text-terminal-text mb-4 flex items-center">
            <Palette className="w-5 h-5 mr-2" />
            AI Model Settings
          </h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-terminal-text mb-2">Default Model</label>
              <select
                value={settings.defaultModel}
                onChange={(e) => handleSettingChange('defaultModel', e.target.value)}
                className="command-line border border-terminal-text p-2 rounded w-full"
              >
                <option value="gpt-4">GPT-4</option>
                <option value="gpt-3.5-turbo">GPT-3.5 Turbo</option>
                <option value="claude">Claude</option>
                <option value="local">Local LLM</option>
              </select>
            </div>

            <div className="flex items-center justify-between">
              <label className="text-terminal-text">Auto-save Test Results</label>
              <input
                type="checkbox"
                checked={settings.autoSave}
                onChange={(e) => handleSettingChange('autoSave', e.target.checked)}
                className="w-4 h-4 text-terminal-text bg-transparent border-terminal-text rounded"
              />
            </div>
          </div>
        </motion.div>

        {/* Save Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <button
            onClick={handleSaveSettings}
            className="retro-button text-lg px-8 py-3"
          >
            <Save className="w-5 h-5 mr-2" />
            Save Settings
          </button>
        </motion.div>
      </div>
    </div>
  )
}

export default SettingsPage
