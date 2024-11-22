/* eslint-disable react/prop-types */
import { ArrowUpCircleIcon } from "@heroicons/react/24/outline"
import Episodes from "./Episodes"
import { useEffect, useState } from "react"
import axios from "axios";
import Loader from './Loader'
import toast from "react-hot-toast";



function CharactersDetails({ selectedId, onAddFavorite, isAdded }) {

    const [character, setCharacter] = useState("")
    const [isLoading, setISLoading] = useState(false)
    const [episodes, setEpisodes] = useState([])
    const [sortedList,setSortedList]=useState(true)
    let sortedEpisodes
    if(sortedList){
       sortedEpisodes=[...episodes].sort((a,b)=>new Date(a.created)-new Date(b.created))
    }
    else{
        sortedEpisodes=[...episodes].sort((a,b)=>new Date(b.created)-new Date(a.created))

    }
    useEffect(() => {
        async function fetchApi() {
            try {
                setISLoading(true)
                setCharacter('')
                const response = (await axios.get(`https://rickandmortyapi.com/api/character/${selectedId}`)).data
                setCharacter(response);
                const episodesID = response.episode.map((e) => e.split('/').at(-1))
                console.log(episodesID);
                const { data: episodeid } = await axios.get(`https://rickandmortyapi.com/api/episode/${episodesID}`)
                setEpisodes([episodeid].flat())


            }
            catch (error) {


                toast.error(error.response.data.error)
            }
            finally {
                setISLoading(false)
            }
        }
        fetchApi()
    }, [selectedId])
    if (isLoading) return <Loader />
    if (!character) return <div style={{ color: "white", fontSize: "90px" }}>Not character choosen yet...</div>
    return (
        <div style={{ flex: 1 }}>
            <div className="character-detail">
                <img src={character.image} alt={character.name} className="character-detail__img" />
                <div className="character-detail__info">
                    <h3 className="name">
                        <span>{character.gender === "Male" ? "🧔" : "👸"}</span>
                        <span>&nbsp;{character.name}</span>
                    </h3>
                    <div className="info">
                        <span className={`status ${character.status === "Dead" ? "red" : ""}`}></span>
                        <span>&nbsp;&nbsp;{character.status}</span>
                        <span>&nbsp;&nbsp;-{character.species}</span>
                    </div>
                    <div className="location">
                        <p>last known location:</p>
                        <p>{character.location.name}</p>
                    </div>
                    <div className="actions">
                        {
                            !isAdded ? (<button className="btn btn--primary"
                                onClick={() => onAddFavorite(character)}>Add to favorite</button>) :
                                (<button className="btn btn--primary" >Add to favorite</button>)
                        }
                    </div>
                </div>
            </div>

            <div className="character-episodes">
                <div className="title">
                    <h2>list of episods</h2>

                    <button onClick={()=>setSortedList((is=>!is))}>
                    <ArrowUpCircleIcon className="icon" style={{rotate:sortedList?"0deg":'180deg'}}/>
                        </button>
                </div>
                <ul>
                    {
                        sortedEpisodes.map((item, index) => <Episodes index={index} key={item.id} item={item} />)
                    }
                </ul>

            </div>
        </div>
    )
}

export default CharactersDetails