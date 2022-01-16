import React from 'react'
import '../Styles/Video.css'
import VideoCard from './VideoCard'
const Video = ({videos}) => {
    return (
        <div className="Video">
            {
                videos.map((item,index)=>(
                    <VideoCard index={index} key={item.item} image={item.image} name={item.name}/>
                ))
            }
        </div>
    )
}

export default Video
