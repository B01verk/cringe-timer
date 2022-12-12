import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  let [time, setTime] = useState(80060)

  useEffect(() => {
    setTimeout(() => {
      setTime(() => time - 1)
    }, 1000)
  }, [time])

  return (
    <>
      <h1>До кринжа света { Math.floor(time / 3600 / 24) }д. { Math.floor(time / 3600) % 24 }ч. { Math.floor(time / 60) % 60 }м. { time % 60 }с.</h1>
    </>
  )
}

export default App