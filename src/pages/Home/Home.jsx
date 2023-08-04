import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { fetchCharacters } from '../../redux/charactersSlice'
import { Link, Routes, Route } from "react-router-dom";
import Loading from '../../components/Loading'
import Error from '../../components/Error.jsx'

function Home() {
    const characters=useSelector(state=>state.character.items)
    const status=useSelector(state=>state.character.isLoading)
    const error=useSelector(state=>state.character.error)
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(fetchCharacters())
    },[dispatch])

    // if(status){
    //   return <Loading></Loading>
    // }

    // if(status==="failed"){
    //   return <Error message={error}></Error>
    // }
  return (
    <div>
      <div className="container">
        <div className="row">
          {
            characters.map((character,key)=>(
              <div key={key} className="col-sm-3 mt-4">
                <div className="card" >
                  <div className="card-body">
                    <Link to={`/char/${character.id}`}>
                      <img className="img-thumbnail" alt={character.name} src={character.image}></img>
                      <div className='name' style={{textAlign:"center"}}>{character.name}</div>
                    </Link>
                    
                  </div>
                </div>
                
              </div>
            ))
          }
          
        </div>
        
      </div>

      {/* <div style={{padding:"30px",textAlign:"center"}}>
        <button onClick={()=>dispatch(fetchCharacters(nextPage))} style={{borderRadius:"5px"}}>Load More ({nextPage})</button>
      </div> */}
      
      

      
    </div>
  )
}

export default Home