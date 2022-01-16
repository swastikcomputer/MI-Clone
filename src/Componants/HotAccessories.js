import React,{Fragment}from 'react'
import '../Styles/HotAccessories.css'
import HotItemCard from './HotItemCard'
const HotAccessories = ({music,musicCover}) => {
    return (
    <Fragment>
        <div className="HotAccessories">
            <div>
                <img src={musicCover} alt="Cover" />
            </div>
            {/* -----2nd  */}
            <div>
                {
                    music.map((item,index)=>(
                        <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index}/>
                    ))
                }
            </div>
            </div>
    </Fragment>
        
       
    )
}


export default HotAccessories
