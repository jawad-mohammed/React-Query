import {useQuery} from 'react-query'

const FetchData = () => {
  const {isLoading,error,data} = useQuery('users',()=> 
  fetch(`https://jsonplaceholder.typicode.com/posts`).then((res)=>res.json()))
  
  if(isLoading) return 'Loading....'
  if(error) return 'An error occured'+ error.message 

    return (
    <>FetchData
  {data.map((elem)=>{
return(<div>
    {elem.title}{elem.body}
</div>)
  })}  
    
    
    
    </>
  )
}

export default FetchData