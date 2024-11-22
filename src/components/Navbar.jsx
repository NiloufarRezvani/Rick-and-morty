/* eslint-disable react/prop-types */
import { HeartIcon, TrashIcon } from "@heroicons/react/24/outline"
import Modals from "./Modals"
import { useState } from "react"
import Character from "./Character"


function Navbar({children}) {
    return (
        <div>
            <nav className="navbar">
                <div className="navbar__logo">LOGO😍</div>
                {children}
                <div className="navbar__result">Found X characters</div>
                
            </nav>
        </div>
    )
}

export default Navbar


export function Favorites({favorites,removeItem}){
    const [open,setIsOpen]=useState(false)
    return(
        <>
        <Modals open={open} isOpen={setIsOpen} title="List of favorites">
            {favorites.map((item)=>(<Character key={item.id} item={item} Id={item.id} onSelectCharacter={()=>{}}>
                <button className="icon red" onClick={()=>removeItem(item.id)}>
                    <TrashIcon></TrashIcon>

                </button>
            </Character>))}
        </Modals>
          <button className="heart" onClick={()=>setIsOpen((is)=>!is)}>
                    <HeartIcon className="icon"/>
                    <span className="badge">{favorites.length}</span>
                </button>

        </>
      
    )
}