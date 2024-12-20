import { useState,useEffect } from "react";


export default function useLocalStorage(key,initialState){
    const [value,setValue]=useState(()=>JSON.parse(localStorage.getItem(key))||initialState);
 
    useEffect(()=>{
      localStorage.setItem(key,JSON.stringify(value))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[value])

    return [value,setValue]
}