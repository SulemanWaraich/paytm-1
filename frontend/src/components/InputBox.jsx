import React from 'react'

function InputBox({name, place}) {
  return (
    <>
    <div className='text-lg font-medium text-left py-2'>
      <label htmlFor="">{name}</label>
    </div>
    <input type="text" placeholder={place} className='w-full rounded border px-2 py-1 border-slate-200'/>
    </>
  )
}

export default InputBox