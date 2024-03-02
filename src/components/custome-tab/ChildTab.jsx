
import React, { useState } from 'react'

const ChildTab = ({ tabContent, onChange }) => {
    const [currentTabIndex, setCurrentTabIndex] = useState(0)

    const handleOnClick = (getCurrentIndex) => {
        setCurrentTabIndex(getCurrentIndex)
        onChange(getCurrentIndex)
    }

    return (
        <div className='flex items-center justify-center flex-col'>
            <div className='flex item-center justify-center gap-10 my-10'>
                {
                    tabContent.map((tabIndex, index) => (
                        <div 
                        className={` ${currentTabIndex === index ? "active:bg-red-500" : "cursor-pointer bg-blue-400 py-2 px-5 font-normal border-0 text-white"}`}
                        key={tabIndex.label} onClick={() => handleOnClick(index)}>
                            <span>{tabIndex.label}</span>
                        </div>
                    ))
                }
            </div>
            <div className=' overflow-auto text-2xl'> 
                {
                    tabContent[currentTabIndex] && tabContent[currentTabIndex].content
                }
            </div>
        </div>
    )
}

export default ChildTab
