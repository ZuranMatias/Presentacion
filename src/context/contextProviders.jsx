import React from 'react'
import { LanguageVariableProvider } from './languageContext'
import { ThemeVariableProvider } from './themeContext'
import { TextDataProvider } from './textContext'

function ContextProviders({ children }) {
  return (
    <LanguageVariableProvider>
      <ThemeVariableProvider>
        <TextDataProvider>
          {children}
        </TextDataProvider>
      </ThemeVariableProvider>
    </LanguageVariableProvider>
  )
}

export default ContextProviders
