import React,{useEffect} from 'react'

const Posts = ({posts, loading}) => {

  useEffect(()=>{
   
  },[])
if(loading)
{
  return <h2>Loading...</h2>
}

  return (
    <ul>
      {
        posts.map((post)=>(
          <li key={post.id}>{post.title}</li>
        ))
      }
    </ul>
  )
}

export default Posts