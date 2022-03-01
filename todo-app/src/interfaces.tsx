export interface Todo {
    id: number
    title: string
    completed: boolean
  }

export interface TaskProps {
    task: Todo
    toggle: (id: number) => void
  }

export interface TaskArray {
    tasks: Todo[] | undefined
    toggle: (id: number) => void
  }
