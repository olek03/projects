import { ReactElement } from "react"

const Header: React.FC<{ text: string }> = ({ text }): ReactElement => {
  return (
    <h1>{text}</h1>
  )
}

export default Header