import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Posts from './Posts'
import Pagination from './Pagination'

const Home = () => {
  const[posts,setPosts]=useState();
  const[loading,setLoading]=useState(false);
  const[searchVal,setSearchVal]=useState("")
  const[filterPosts,setFilterPosts]=useState([])
  
 useEffect(()=>{
    fetchData();
  },[])


  const fetchData=async()=>{
     setLoading(true);
     const res=await fetch('https://jsonplaceholder.typicode.com/posts')
     const data= await res.json();
     setPosts(data);
     setFilterPosts(data);
     setLoading(false); 
  }
  
  const handleSearch=(e)=>{
        setSearchVal(e.target.value)
        let li=posts.filter((s)=>s.title.includes(e.target.value))
        setFilterPosts(li);
      } 

 
  return (
    <div>
      <h1 style={{marginBottom:"30px"}}>Post Detail</h1>
      <input type="text" value={searchVal} onChange={handleSearch}></input>
      <Pagination posts={filterPosts}loading={loading}></Pagination>
    </div>
  )
}

export default Home