/* eslint-disable react/prop-types */
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'



function Character({item,children}) {
  return (
    <div className='list__item'>
        <img src={item.image} alt={item.name} />
        <h3 className='name'>
            <span>{item.gender==="Male"?"🧔":"👸"}</span>
            <span>{item.name}</span></h3>
            <div className="list-item__info info">
                <span className={`status ${item.status ==="Dead"?"red":""}`}></span>
                <span >{item.status}</span>
                <span> - {item.species}</span>
            </div>
            {children}
    </div>
  )
}

export default Character

 export function EyeBtn({onSelectCharacter,Id,item}){
  return(
    <button className='icon red' onClick={()=>onSelectCharacter(item.id)}>
             {Id===item.id?<EyeSlashIcon/> :<EyeIcon/>}
            </button>
  )
}