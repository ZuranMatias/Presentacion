import React, { createContext, useContext, useState, useEffect } from 'react'

const themeVariable = createContext()

export function ThemeVariableProvider({ children }) {
  const [theme, setTheme] = useState(localStorage.getItem('theme'))

  useEffect(() => {
    if (!theme) {
      localStorage.setItem('theme', 'dark')
      setTheme('dark')
    }
  }, [])

  const changetheme = (newtheme) => {
    if (!newtheme) {
      newtheme = 'dark'
      localStorage.setItem('theme', 'dark')
    }
    if (newtheme == 'dark' || newtheme == 'light') {
      setTheme(newtheme)
      localStorage.setItem('theme', JSON.stringify(newtheme))
    }
  }

  const toggleTheme = () => {
    if (theme == 'dark') {
      setTheme('light')
      localStorage.setItem('theme', 'light')
    } else {
      setTheme('dark')
      localStorage.setItem('theme', 'dark')
    }
  }

  const oppositeTheme = () => {
    if (theme == 'dark') {
      return 'light'
    } else {
      return 'dark'
    }
  }

  return (
    <>
      <themeVariable.Provider
        value={{ theme, changetheme, toggleTheme, oppositeTheme }}
      >
        {children}
      </themeVariable.Provider>
    </>
  )
}

export function usethemeVariable() {
  return useContext(themeVariable)
}
