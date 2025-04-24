import { useQuery } from "@tanstack/react-query"
import Loading from "./components/Loading"
import { useState } from "react"


function App() {
  const [id, setId]= useState(1)
  const {data, isPending, refetch, error} = useQuery({
    queryKey:['todos', id],
    queryFn:()=> getTodos(id),
  })

  if(error){
    alert('something went wrong')
  }
  return (
    <>
    <h1>hello world</h1>
    <h1>{isPending? <Loading/>:JSON.stringify(data.slice(0,5))}</h1>
    <button onClick={()=>setId((prev)=>prev+1)}>Increment id</button>
    
    
       
    </>
  )
}

const getTodos= async (id:number)=>{
  const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
  return await response.json()
}

export default App
