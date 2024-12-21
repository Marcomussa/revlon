import React from 'react'
import { Carousel } from 'react-bootstrap'

const SliderNames = ({ names }) => {
    return (
        <Carousel controls={false} indicators={false} interval={2000}>
            {names.map((name, index) => (
                <Carousel.Item key={index}>
                    <h3>
                        {name.boldText && <strong>{name.boldText}</strong>}
                        {name.normalText}
                    </h3>
                </Carousel.Item>
            ))}
        </Carousel>
    )
}

export default SliderNames