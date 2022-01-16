import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/HotAccessoriesMenu.css'


const HotAccessoriesMenu = () => {

    


    return (
        <div className="HotAccessoriesMenu">
            <Link className="HotAccessoriesMenuLink" to="/music" >Music Store</Link>
            <Link className="HotAccessoriesMenuLink" to="/smartDevices"  >Smart Devices</Link>
            <Link className="HotAccessoriesMenuLink" to="/home">Home</Link>
            <Link className="HotAccessoriesMenuLink" to="/lifeStyle">LifeStyle</Link>
            <Link className="HotAccessoriesMenuLink" to="/mobileAccessories">Mobile Accessories</Link>
            
            
            
        </div>
    )
}

export default HotAccessoriesMenu
