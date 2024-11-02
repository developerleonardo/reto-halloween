import React from 'react'
import { Navbar } from '../Navbar'
import { Layout } from '../Layout'
import { Footer } from '../Footer'
import { MonstersSection } from '../MonstersSection'
import './reset.css'
import './App.css'

function App() {
  return (
    <div className='main-container'>
      <Navbar />
      <Layout>
        <MonstersSection />
      </Layout>
      <Footer />
    </div>
  )
}

export default App
