import React, { ReactElement } from 'react'
import { TaskProps } from '../interfaces'

const Task: React.FC<TaskProps> = ({ task, toggle }): ReactElement =>  {
  return (
    <div className="task">
        <p>{task.title}</p>
        <input type="checkbox" checked={task.completed} onChange={() => toggle(task.id)} />
    </div>
  )
}

export default Task