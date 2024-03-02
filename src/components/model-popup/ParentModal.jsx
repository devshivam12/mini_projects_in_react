import React, { useState } from 'react'
import ChildModal from './ChildModal'

const ParentModal = () => {
  const [showModalPopup, setShowModalPopup] = useState(false)

  const handleToggleModal = () => {
    setShowModalPopup(!showModalPopup)
  }
  const onCloseMethod = () => {
    setShowModalPopup(false)
  }

  return (
    <div className='flex items-center justify-center flex-col my-4'>
      <button onClick={handleToggleModal} className=' rounded-xl bg-yellow-700 text-white py-2 px-5'>Open model popup</button>

      {showModalPopup && <ChildModal
        onCloseMethod={onCloseMethod}
        header={<div>welcome to the header</div>}
        footer={<div>welcome the footer</div>}
        body={<div>You succesfully open modal</div>} />}
    </div>
  )
}

export default ParentModal
