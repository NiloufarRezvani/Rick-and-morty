import { XCircleIcon } from "@heroicons/react/24/outline"


// eslint-disable-next-line react/prop-types
function Modals({title,isOpen,children,open}) {
    if(!open)return null;
  return (
    <div>
        <div className="backdrop" onClick={()=>isOpen(false)}></div>
            <div className="modal">
                <div className="modal__header">
                    <h2 className="title">{title}</h2>
                    <button onClick={()=>isOpen(false)}>
                        <XCircleIcon className="icon close"/>
                    </button>
                </div>
                {children}
            </div>
    </div>
  )
}

export default Modals