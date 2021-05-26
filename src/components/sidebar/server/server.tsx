import React from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChannelsGroup from './channelsGroup'
import firebase from 'firebase'
interface Channel  {
    id: string | null |undefined,
    channel: firebase.firestore.DocumentData
}
const Server:React.FC<{channels?:Channel[]|null|undefined}> = ({channels}) => {
    return (
        <div className="server">
            
            <h4 className="server-name">Channel Name <ExpandMoreIcon/> </h4>
            <ChannelsGroup channels={channels} />
        </div>
    )
}

export default Server
