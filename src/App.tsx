import { useQuery } from "@tanstack/react-query"
import Loading from "./components/Loading"


function App() {
  const {data, isPending, refetch, error} = useQuery({
    queryKey:['todos'],
    queryFn: getTodos
  })

  if(error){
    alert('something went wrong')
  }
  return (
    <>
    <h1>hello world</h1>
    <h1>{isPending? <Loading/>:JSON.stringify(data.slice(0,5))}</h1>
    <button onClick={()=>refetch()}>refetch</button>
    
    
       
    </>
  )
}

const getTodos= async ()=>{
  const response = await fetch("https://jsonplaceholder.typicode.com/todos")
  return await response.json()
}

export default App
