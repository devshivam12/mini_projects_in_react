import React from 'react'

const CardData = ({ myData }) => {
    const { title, body, id } = myData
    return (
        <div className='w-full '>
            <div className=' w-80 bg-slate-600 p-5 text-white'> 
                <p className=''>{id}</p>
                <p>{body.substr(0, 150)}</p>
                <p className=' m-auto block text-center my-5 bg-black p-2 cursor-pointer '>{title.substr(0, 15)}</p>
            </div>
        </div>
    )
}

export default CardData
