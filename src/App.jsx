import MainTodo from "./component/MainTodo"
import { Add } from "./component/NewContext"

export default function App() {
  return (
    <Add>
      <MainTodo/>
    </Add>
    
  )
}