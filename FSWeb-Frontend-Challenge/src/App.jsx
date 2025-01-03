import { useState } from 'react'
import './App.css'
import './components/Header.css'
import './components/Profile.css';
import './components/Skills.css';
import './components/Projects.css';
import './components/Contact.css';

// Header bileşenini import ediyoruz
import Header from './components/Header'
import Skills from './components/Skills'
import Profile from './components/Profile';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
     

      {/* Header bileşenini burada ekliyoruz */}
      <Header />
      <Skills />
      <Profile />
      <Projects />
      <Contact />
    </>
  )
}

export default App
