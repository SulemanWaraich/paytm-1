import React from 'react'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import InputBox from '../components/InputBox'
import Button from '../components/Button'
import Friend from '../components/Friend'

function Send() {
  return (
    <div className='h-screen flex justify-center items-center bg-slate-300'>
    <div className='bg-white rounded p-10 text-center w-96 space-y-2'>
      <div className='mb-4'>
      <Heading label={'Send Money'}/>
      </div>
      <Friend capital={'MS'} name={'Muhammad Suleman'}/>
      <InputBox name={'Amount (in Rs)'} place={'Enter Amount'}/>
      <Button btnName={'Initiate Transfer'}/>
    </div>
    </div>
  )
}

export default Send