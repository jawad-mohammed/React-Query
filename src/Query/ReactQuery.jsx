import React from 'react'
import { useQuery } from 'react-query' 
const ReactQuery = () => {
const {isLoading,data,error} = useQuery('userss',()=>
    fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then((res)=>res.json())
)
if(isLoading) return 'Please wait'
console.log(data.title);
  return (
    <div>ReactQuery
{data.map(({title,body})=>{
return(<>
{title}{body}
</>)
})}


    </div>
  )
}

export default ReactQuery