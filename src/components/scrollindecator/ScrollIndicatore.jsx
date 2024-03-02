import React, { useEffect, useState } from 'react'
import './scroll.css'
const ScrollIndicatore = ({ url }) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [scrollPercentage, setScrollPercentage] = useState(0)

    async function fetchData(getUrl) {
        setLoading(true)
        try {
            const response = await fetch(getUrl)
            const data = await response.json()
            console.log(data)

            if (data && data.products && data.products.length) {
                setData(data.products)
                setLoading(false)
            }
        } catch (error) {
            console.log(error)
            setError(error.message)
        }
    }

    const handleScrollPercentage = () => {
        console.log(
            document.body.scrollTop,
            document.documentElement.scrollHeight,
            document.documentElement.scrollTop,
            document.documentElement.clientHeight);

        const howMuchScroll = document.body.scrollTop || document.documentElement.scrollTop

        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        setScrollPercentage((howMuchScroll / height) * 100)

    }

    useEffect(() => {
        window.addEventListener('scroll', handleScrollPercentage);

        return () => {
            window.removeEventListener('scroll', () => { })
        }
    }, [])

    useEffect(() => {
        fetchData(url)
    }, [url])

    console.log(data, scrollPercentage)
    return (
        <div>
            <div className="top-container">
                <h1 className=' text-2xl'>Custome scroll indicator</h1>
                <div className='scroll-progress-tracking-container'>
                    <div className='current-progress-bar' style={{ width: `${scrollPercentage}%` }}>
                    </div>
                </div>
            </div>
            <div className='mt-20 flex flex-col text-center'>
            {
                data && data.length > 0 ?
                    data.map(dataItem => <p>{dataItem.title}</p>)
                    : null
            }
            </div>
        </div>
    )
}

export default ScrollIndicatore
