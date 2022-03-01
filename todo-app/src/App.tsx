import React, { ReactElement, useEffect, useRef, useState } from 'react'
import Button from './components/Button'
import Header from './components/Header'
import { Todo } from './interfaces'
import Tasks from './components/Tasks'

const App: React.FC = (): ReactElement => {

  const [tasks, setTasks] = useState<Todo[]>()

  const LOCAL_STORAGE_KEY = "tsreact.todoapp"

  useEffect((): void => {
    const storageContents: string | null = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (storageContents == null) return
    const storageItems: Todo[] = JSON.parse(storageContents)
    setTasks(storageItems)
  }, [])

  useEffect((): void => {
    const storageContents: string | null = JSON.stringify(tasks)
    if (storageContents == null) return
    localStorage.setItem(LOCAL_STORAGE_KEY, storageContents)
  }, [tasks])

  const toggle = (id: number): void => {
    if (tasks == null) return
    const copyTasks = [...tasks]
    copyTasks.forEach((todo: Todo): void => {
      if (todo.id === id) todo.completed = !todo.completed
    })
    setTasks(copyTasks)
  }

  const inputref = useRef<HTMLInputElement>(null)

  const add: VoidFunction = (): void => {
    if (inputref == null || inputref.current == null || inputref.current.value === "") return
    const newTask: Todo = {
      id: Math.floor(Math.random() * 100000),
      title: inputref.current.value,
      completed: false
    }
    if (tasks != null) setTasks([...tasks, newTask])
    if (tasks == null) setTasks([newTask])
    inputref.current.value = ""
  }

  const count: VoidFunction = (): number => {
    if (tasks == null) return 0
    const uncompleted = tasks.filter((task: Todo): boolean => !task.completed)
    return uncompleted.length
  }

  const removeCompleted: VoidFunction = (): void => {
    if (tasks == null) return
    const oldTasks: Todo[] = [...tasks]
    const newTasks: Todo[] = oldTasks.filter((task: Todo): boolean => !task.completed)
    setTasks(newTasks)
  }

  return (
    <div className="App">
      <div className="top">
        <Header text="Todo App" />
        <div>
          <input ref={inputref} />
          <Button text="Add" fn={add} />
        </div>
      </div>
      <div className="tasks">
        <Tasks tasks={tasks} toggle={toggle} />
      </div>
      <div className="footer">
        <p>You have {count()} tasks left</p>
        <Button fn={removeCompleted} text="Clear completed" />
      </div>
    </div>
  )
}

export default App