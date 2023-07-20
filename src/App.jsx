import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import Footer from './components/Footer'

export default function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <div id='hello'>H E Y : )</div>
        <div>
          <img className="coffee" src="/public/images/coffee-mug.png" alt="coffee mug illustration" />
        </div>
        <Nav />
        <Footer />
      </div>
    </>
  )
}

