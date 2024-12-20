import { useState } from "react";
import "./App.css";
import CharactersDetails from "./components/CharactersDetails";
import CharactersList from "./components/CharactersList";
import Navbar from "./components/Navbar";

import { Toaster } from "react-hot-toast";

import Search from "./components/Search";
import { Favorites } from "./components/Navbar";
import useCharacters from "./hooks/useCharacters";
import useLocalStorage from "./hooks/useLocalStorage";

function App(){
 
  const {isLoading,allCharacters}=useCharacters(query)
  const [query,setQuery]=useState('');
  const [selectedId,setSelectedId]=useState(null)
  const [favor,setFavor]=useLocalStorage('favorites',[])
 

// useEffect(()=>{
//   setIsLoading(true);
//   fetch("https://rickandmortyapi.com/api/character")
//   .then((res)=>{
//    if(!res.ok) throw new Error("something went wrong")
//   return res.json()})
// .then((data)=>setCharacters(data.results))
//   .catch((err)=>toast.error(err.message)).finally(setIsLoading(false))
// },[])
const handleSelect =(id)=>{
  setSelectedId((prevID)=>prevID===id?null:id)
}
const handleFavorite=(char)=>{
  setFavor([...favor,char])
}
const handleRemoveFavorites =(id)=>{
  
 setFavor((prevFav)=>prevFav.filter((item)=>item.id!==id))
}
const isSelected=favor.map((fav)=>fav.id).includes(selectedId)

  return (
    <>
    <div className="app">
      <Toaster></Toaster>
      <Navbar>
        
        <Search query={query} setQuery={setQuery}/>
        <Favorites favorites={favor} removeItem={handleRemoveFavorites}/>
      </Navbar>
      <div className="main">
        <CharactersList
         characters={allCharacters}
          isLoading={isLoading}
           onSelect={handleSelect}
           selectedId={selectedId}
           />
        <CharactersDetails 
        selectedId={selectedId}
        onAddFavorite={handleFavorite}
        isAdded={isSelected}
           />
      </div>
    </div>
    </>
  )
}
export  default App