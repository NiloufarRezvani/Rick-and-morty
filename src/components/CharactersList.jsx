/* eslint-disable react/prop-types */
import Loader from "./Loader"
import { EyeBtn } from './Character'
import Character from "./Character"


function CharactersList({characters,isLoading,onSelect,selectedId}) {

  // const handleLoading =()=>{
  //   fetch("https://rickandmortyapi.com/api/character")
  //   .then((res)=>res.json()).then((data)=>setCharacters(data.results.slice(0, 3)
  //   ))
  // }
  return (
    <>
    
    
    {characters?
      (<div className="characters-list">
      {isLoading?(<Loader/>):
      (
        characters.map((item)=> 
          <Character key={item.id} item={item}  ><EyeBtn onSelectCharacter={onSelect} Id={selectedId} item={item}/></Character>)
      )}
       
    </div>)
    :(<p>No characters yet</p>)
    }
    </>
  )
}

export default CharactersList