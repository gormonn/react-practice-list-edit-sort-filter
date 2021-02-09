module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  settings: {
    react: {
      vesion: 'detect'
    }
  },
  extends: [
    "plugin:react-hooks/recommended",
    'plugin:react/recommended',
    'standard'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
  }
}
