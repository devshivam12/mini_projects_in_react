import React from 'react'
import CardData from './CardData'
const CardComponent = ({ cardInfo }) => {
    return (
        <div className='grid grid-cols-4 gap-4 w-full p-4'>
            {cardInfo.map((currentValue, id) => {
                return <CardData key={id} myData={currentValue} />
            })}
        </div>
    )
}

export default CardComponent
