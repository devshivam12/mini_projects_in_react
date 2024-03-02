import React from 'react'

const ChildModal = ({id, header, body, footer, onCloseMethod}) => {
  return (
    <div id={id || "Modal"} className='w-full h-full z-10 flex items-center justify-center flex-col  relative '>
      <div className=' w-1/4 absolute top-0 '>
        <div className='flex items-center justify-between gap-3'>
          <h2 className='text-2xl'>{header ? header : "Header"}</h2>
          <span onClick={onCloseMethod} className='cursor-pointer'>&times;</span>
        </div>
        <div>
          {
            body ? body : <h2 className='text-center text-white'>This is body content</h2>
          }
        </div>
        <div>
          {
            footer ? footer : <div>This is footer content</div>
          }
        </div>
      </div>
    </div>
  )
}

export default ChildModal;
