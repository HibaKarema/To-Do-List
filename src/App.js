import { useState, useRef } from 'react'
import './App.css'
import HiPage from './Components/HiPage/HiPage'
function App() {
  const [x, setX] = useState([])
  const inputRef = useRef()

  const add = () => {
    if (inputRef.current.value.trim() !== '') {
      const value = inputRef.current.value
      const newData = { completed: false, value }
      setX([...x, newData])
      inputRef.current.value = ''
    }
  }

  const itemDone = (index) => {
    const newX = [...x]
    newX[index].completed = !newX[index].completed
    setX(newX)
  }

  const toDelete = (index) => {
    const newX = [...x]
    newX.splice(index, 1)
    setX(newX)
  }

  const moveUp = (index) => {
    if (index > 0) {
      const updateTask = [...x]
      ;[updateTask[index], updateTask[index - 1]] = [
        updateTask[index - 1],
        updateTask[index],
      ]
      setX(updateTask)
    }
  }
  const moveDown = (index) => {
    if (index < x.length - 1) {
      const updateTask = [...x]
      ;[updateTask[index], updateTask[index + 1]] = [
        updateTask[index + 1],
        updateTask[index],
      ]
      setX(updateTask)
    }
  }
  return (
    <div>
      <HiPage />
      <div className="App">
        <h2>Your Tasks List</h2>
        <ul>
          {x.map(({ value, completed }, index) => {
            return (
              <div className="div10">
                <li className={completed ? 'liStyle1' : ''}>
                  <span
                    onClick={() => itemDone(index)}
                    className={completed ? 'liStyle' : 'text'}
                  >
                    {value}
                  </span>
                  <div className="btnDivs">
                    <span onClick={() => toDelete(index)} className="delSpan">
                      🗑️
                    </span>
                    <span onClick={() => moveUp(index)}>⬆️</span>
                    <span onClick={() => moveDown(index)}>⬇️</span>
                  </div>
                </li>
              </div>
            )
          })}
        </ul>
        <input ref={inputRef} placeholder="enter your task..." />
        <button onClick={add} className="addBtn">
          Add
        </button>
      </div>
    </div>
  )
}

export default App
