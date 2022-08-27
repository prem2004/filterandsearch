import React,{useEffect,useState} from 'react'
import Posts from './Posts'

const Pagination = ({posts,loading}) => {
  const[currentPost,setCurrentPost]=useState([]);
  const[currentpage,setCurrentPage]=useState(1); 
  const[postPerPage,setPostperPage]=useState(20);

  const indexOfLastPost=currentpage*postPerPage 
  const indexOfFirstpost=indexOfLastPost-postPerPage
 

  useEffect(()=>{
    if(posts)
    {
      
      let currectpostt=posts.slice(indexOfFirstpost,indexOfLastPost)
      setCurrentPost(currectpostt)
    }
    
  },[posts])

  const setvalueToCurrentPost=()=>{
    let currectpostpage=posts.slice(indexOfFirstpost,indexOfLastPost)
    setCurrentPost(currectpostpage)
  }
  let tota=Math.ceil(posts && posts.length/postPerPage);
  

  const handlePerv=()=>{
    setCurrentPage((currentpage)=>currentpage-1)
    setvalueToCurrentPost();
    }
    const handleNext=()=>{
      setCurrentPage((currentpage)=>currentpage+1)
      setvalueToCurrentPost();
     }

   
  return (
    <div>
      {posts &&  <Posts posts={currentPost} loading={loading}></Posts>}
    <footer style={{width:'150px', border:'1px solid', display:'flex',alignItems:'center'}}>
     <button disabled={currentpage===1 ? true : false} style={{fontSize:'25px'}} onClick={handlePerv}>{'<'}</button>
     <div style={{fontSize:'25px', padding:'10px'}}>{currentpage}</div>
     <button disabled={currentpage===tota ? true : false} onClick={handleNext} style={{fontSize:'25px'}} >{'>'}</button>
    </footer>
    </div>
  )
}

export default Pagination