import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='header'> /* навигация */
        <img src="" alt="Label"/>
        <ul className='header-nav'>
          <li>
            <a href="https://vite.dev" target="_blank">wi-fi приколы</a>
          </li>
          <li>
            <a href="https://react.dev" target="_blank">кабель приколы</a>
          </li>
          <li>
            <a href="https://react.dev" target="_blank">тут чето еще будет</a>
          </li>
        </ul>
        <div className='header-sing-in'>
          <a href="">
            <img src="" alt="" />
          </a>
        </div>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
