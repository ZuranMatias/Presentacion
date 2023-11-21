import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './home'

function RoutesPaths() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
    </Routes>
  )
}

export default RoutesPaths