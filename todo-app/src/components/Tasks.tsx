import { ReactElement } from 'react'
import { TaskArray, Todo } from '../interfaces'
import Task from './Task'

const Tasks: React.FC<TaskArray> = ({ tasks, toggle }): ReactElement => {
  if (tasks == null) return (
      <div>
        <h3>Tasks: </h3>
      </div>
  )

  return (
    <div>
      <h3>Tasks: </h3>
      {tasks.map((task: Todo) => (
       <Task key={Math.random() * 100000} task={task} toggle={toggle} />
      ))}
    </div>
  )
}

export default Tasks