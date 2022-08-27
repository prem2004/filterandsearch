import React, { useState,useCallback, useEffect } from 'react'
import './myformStyle.css'

let ar1=[
  {country:"India",city:"Delhi"},
  {country:"China",city:"Honkong"},
  {country:"USA",city:"Newyork"},
  {country:"Japan",city:"Tokiyo"},
  {country:"Britan",city:"Londan"},
  {country:"pakistan",city:"Lahor"},
  {country:"Bangladesh",city:"Dhaka"},
  {country:"India",city:"Delhi"},
  {country:"India",city:"Delhi"},
  {country:"India",city:"Delhi"},
  ]

const MyForm = () => {
  const[sortAsen, setSort]=useState(true);
  const[sortCountry,setsortCountry]=useState(false);
  const[inputval,setInputval]=useState('');
  const[selectState,setselectState]=useState();
  const[loading,setloading]=useState(true)
  const[ar,setar]=useState()
  
    useEffect(()=>{
      fetchdata();
    },[])

    useEffect(()=>{
      if(ar){
        sortbyCountry('country')
        }
    },[ar])

  const promisedData=()=>{
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve(ar1)
      },2000)
    })
  }

    const fetchdata=async()=>{
      const data= await promisedData()
      setar(data)
      setloading(false)
    }
    

    const filterData=(e)=>{
        setInputval(e.target.value)
        console.log(e.target.value)
        let ss=ar.filter((v)=>{v.country.toUpperCase().includes(`${e.target.value.toUpperCase()}`)
        setar(ss);
         }
        )
     }

    const sortbyCountry=(filed)=>{
       setsortCountry(!sortCountry)
       ar.sort((a,b)=>{
        if(a[filed].toUpperCase() < b[filed].toUpperCase())
        {
          return sortCountry ?  1 : -1;
        }else{
          return  sortCountry ? -1 : 1;
        }
        return 0
      })
    }

    const handleselect=(e)=>{
      setselectState(e.target.value)
    }
   
  return (
    <div className='continer'>
    {loading && <h1>Loading....</h1>}
    { !loading &&(
      <div>
      <input value={inputval} onChange={filterData} className='search-country'  placeholder='search country' type='text' role="button" aria-label='search country'/>
       <div>
         <select value={selectState} onChange={handleselect} style={{marginBottom:'10px',padding:'10px'}}>
         <option>Select state</option>
           <option>Maharastra</option>
           <option>Uttar Pradesh</option>
         </select>
        {selectState==="Maharastra" &&(
          <select>
            <option>Pune</option>
            <option>Mumbai</option>
          </select>
        )}
       </div>
       
       <table className='tbl'>
         <tr className='mytr'>
           <th onClick={()=>sortbyCountry('country')}>Country</th>
           <th onClick={()=>sortbyCountry('city')}>city</th>
         </tr>
        {  ar.map(i=>(
          <tr>
            <td>{i.country}</td>
            <td>{i.city}</td>
          </tr>
        ))
        }
    </table>
    </div>)
    }
    </div>
  )  
}

export default MyForm