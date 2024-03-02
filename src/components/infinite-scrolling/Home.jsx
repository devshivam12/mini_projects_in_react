import React, { useEffect, useState } from 'react'
import CardComponent from './CardComponent'

const Home = () => {
    const [card, setCard] = useState([])
    const [page, setPage] = useState(1)

    async function fetchData() {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=9&_page=${page}`)
        const data = await response.json()
        console.log(data)
        setCard((prev) => [...prev, ...data])
        // setCard(data)
    }

    useEffect(() => {
        fetchData()
    }, [page])

    const handleScrollEvent = async () => {
        console.log(document.documentElement.scrollHeight)
        console.log(window.innerHeight)
        console.log(document.documentElement.scrollTop)
        try {
            if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.scrollHeight) {
                setPage((prev) => prev + 1)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScrollEvent)
    }, [])

    
    return (
        <div>
            <CardComponent cardInfo={card} />
        </div>
    )
}

export default Home
