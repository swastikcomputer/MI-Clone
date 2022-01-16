import React from 'react'
import { Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
const Silder = ({start}) => {
    return (
        <Carousel fade>
            {
                start.map((item,index)=>(
                    <Carousel.Item key={index}>
                <img className="d-block w-100" 
                src={item}
                alt="First silde" />
                    </Carousel.Item>)
                )
            
                }
        </Carousel>
    )
}

export default Silder
