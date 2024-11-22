/* eslint-disable react/prop-types */



function Episodes({item,index}) {
    return (
        <li>
            <div>{String(index+1).padStart(2,"0")}  {item.episode}:
            <strong>{item.name}</strong>
            </div>
            <div className="badge badge--secondary">{item.air_date}</div>

        </li>
    )
}

export default Episodes