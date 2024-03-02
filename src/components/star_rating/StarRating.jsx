import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import './star.css'
const StarRating = ({ noOfStar }) => {

    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)

    const handleClick = (getCurrentIndex) => {
        setRating(getCurrentIndex)
    }

    const handleMouseEnter = (getCurrentIndex) => {
        setHover(getCurrentIndex)
    }

    const handleMouseLeave = () => {
        setHover(rating)
    }
    return (
        <div className='flex'>
            {[...Array(noOfStar)].map(( _, index) => {
                index += 1;
                return (
                    <FaStar
                        key={index}
                        className={index <= (hover || rating) ? 'active' : 'inactive'}
                        onClick={() => handleClick(index)}
                        onMouseMove={() => handleMouseEnter(index)}
                        onMouseLeave={() => handleMouseLeave()}
                        size={40}
                    />
                )
            })}
        </div>
    )
}

export default StarRating
