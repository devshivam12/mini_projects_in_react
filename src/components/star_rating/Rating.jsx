import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import './star.css'
const Rating = ({ noOfStar }) => {
    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)

    const handleClick = (getIndex) => {
        setRating(getIndex)
    }

    const handleHover = (getIndex) => {
        setHover(getIndex)
    }

    const handleRemove = () => {
        setHover(rating)
    }
    return (
        <div>
            {[...Array(noOfStar)].map((_, index) => {
                index += 1
                return (

                    <FaStar
                        key={index}
                        className={index <= (hover || rating) ? 'active' : 'inactive'}
                        onMouseMove={() => handleHover(index)}
                        onClick={() => handleClick(index)}
                        onMouseLeave={() => handleRemove()}
                    />
                )
            })}
        </div>
    )
}

export default Rating
