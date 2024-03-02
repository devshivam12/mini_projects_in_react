import React, { useState } from 'react'
import QRCode from 'react-qr-code'

const QrCode = () => {
    const [input, setInput] = useState("")
    const [qrCode, setQrCode] = useState("")

    const handleGenerateQrCode = () => {
        setQrCode(input)
        setInput('')
    }
    return (
        <div className='flex flex-col items-center justify-center'>
            <p className='my-10 text-3xl ' >Qr code generator</p>
            <div>
                <input  
                    className='border border-slate-300 px-10 py-1 mb-4 mr-5'
                    type="text"
                    name='qr-code'
                    placeholder='Enter your value here'
                    onChange={(e) => setInput(e.target.value)}
                    value={input} />
                <button
                    className='border py-1 px-10 border-slate-400 '
                    disabled={input && input.trim() !== '' ? false : true}
                    onClick={handleGenerateQrCode}>Generat</button>
            </div>
            <QRCode value={qrCode} bgColor='white' size={400} />
        </div>
    )
}

export default QrCode
