import React, { createContext, useContext, useState } from 'react'
import data from '../assets/text.json'

const textData = createContext()

export function TextDataProvider({ children }) {
  const [jsonText, setJsonText] = useState(data)

  return (
    <>
      <textData.Provider value={jsonText}>{children}</textData.Provider>
    </>
  )
}

export function useTextData() {
  return useContext(textData)
}
