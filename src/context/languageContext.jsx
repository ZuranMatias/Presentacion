import React, { createContext, useContext, useState, useEffect } from 'react'

const languageVariable = createContext()

export function LanguageVariableProvider({ children }) {
  const [language, setLanguage] = useState(localStorage.getItem('language'))

  useEffect(() => {
    if (!language) {
      localStorage.setItem('language', 'English')
      setLanguage('English')
    }
  }, [])

  const changeLanguage = (newLanguage) => {
    if (!newLanguage) {
      if (language == 'English') {
        setLanguage('Spanish')
        localStorage.setItem('language', 'Spanish')
      } else {
        setLanguage('English')
        localStorage.setItem('language', 'English')
      }
    }
    if (newLanguage == 'English' || newLanguage == 'Spanish') {
      setLanguage(newLanguage)
      localStorage.setItem('language', JSON.stringify(newLanguage))
    }
  }

  const languageCode = () => {
    switch (language) {
      case 'English':
        return 0
      case 'Spanish':
        return 1
    }
  }

  return (
    <>
      <languageVariable.Provider
        value={{ language, changeLanguage, languageCode }}
      >
        {children}
      </languageVariable.Provider>
    </>
  )
}

export function useLanguageVariable() {
  return useContext(languageVariable)
}
