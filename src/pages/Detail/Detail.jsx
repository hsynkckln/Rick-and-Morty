import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../../components/Loading';

function Detail() {
    const [char,setChar]=useState(null);
    const [loading,setLoading]=useState(true)
    const {id}=useParams()
   
    useEffect(()=>{
        axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/character/${id}`)
        .then(res=>res.data)
        .then(data=>setChar(data))
        .finally(()=>setLoading(false))
    },[id])

  return (
    <div>
        {loading && <Loading></Loading>}
        {
            char && (<div>
                <h1>{char.name}</h1>
                <img style={{width:"50%"}} src={char.image}></img>
            </div>)
        }
        {
            char &&
            <pre>{JSON.stringify(char,null,2)}</pre>
        }
        
    </div>
  )
}

export default Detail