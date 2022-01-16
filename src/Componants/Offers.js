import React from 'react'
import Offer from './Offer'
import '../Styles/Offers.css'
const Offers = ({offer}) => {
    return (
        <div>
            <div className="offerSection">
                {
                    offer.map((item,index)=>(
                    <Offer key={item.image} index={index} src={item.image} link={item.url}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Offers
