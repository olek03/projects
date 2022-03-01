import { ReactElement } from 'react'

const Button: React.FC<{ text: string, fn: VoidFunction }> = ({ text, fn }): ReactElement => {
  return (
    <button onClick={() => fn()}>{text}</button>
  )
}

export default Button