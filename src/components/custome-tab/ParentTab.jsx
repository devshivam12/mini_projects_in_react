import React from 'react'
import ChildTab from './ChildTab'

const RandomContent = () => {
    return <h1>Random Component</h1>
}

const ParentTab = () => {


    const tab = [
        {
            label: 'tab 1',
            content: <div>This is tab 1</div>
        },
        {
            label: 'tab 2',
            content: <div>This is tab 2</div>
        },
        {
            label: 'tab 3',
            content: <RandomContent />
        }
    ]

    const handleOnchange = (CurrentIndex) => {
        console.log(CurrentIndex)
    }
    return (
        <ChildTab tabContent={tab} onChange={handleOnchange} />
    )
}

export default ParentTab;
