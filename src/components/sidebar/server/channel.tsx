import React from 'react'


const Channel:React.FC<{id:string,channel:string}> = ({id,channel}) => {
    return (
        <div className="sidebarChannel">
            <h4>  <span className="sidebarChannel_hash">#</span>{channel}</h4>
        </div>
    )
}

export default Channel
