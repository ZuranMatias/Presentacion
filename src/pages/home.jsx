import React from 'react'
import { useLanguageVariable } from '../context/languageContext'

function Home() {
    const language = useLanguageVariable()
    console.log("Language data", language)
  return (
    <div>
    <h1>Hello World</h1>
    </div>
  )
}

export default Home
