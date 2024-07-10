import React, { useEffect, useState } from 'react'

const Debouncing = () => {
    const [inputValue, setInputValue] = useState("")

    useEffect(() => {
        const data = setTimeout(() => {
            console.log(inputValue)
        }, 1000)

        return () => clearTimeout(data)
    }, [inputValue])

    return (
        <div className='flex items-center justify-center mt-5'>
            <input
                type="text"
                onChange={(e) => setInputValue(e.target.value)}
                placeholder='Type something'
                className='border border-black'
            />
        </div>
    )
}

export default Debouncing
