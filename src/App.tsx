import { useQuery } from "@tanstack/react-query"
import Loading from "./components/Loading"


function App() {
  const {data, isPending} = useQuery({
    queryKey:['todos'],
    queryFn: getTodos
  })
  return (
    <>
    <h1>hello world</h1>
    <h1>{isPending? <Loading/>:JSON.stringify(data.slice(0,5))}</h1>
    
    
       
    </>
  )
}

const getTodos= async ()=>{
  const response = await fetch("https://jsonplaceholder.typicode.com/todos")
  return await response.json()
}

export default App
