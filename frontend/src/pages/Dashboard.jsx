import React from 'react'
import Heading from '../components/Heading';
import NavBar from '../components/NavBar';
import InputBox from '../components/InputBox';

function Dashboard() {
  return (
    <div>
      <NavBar />
    <div className='flex justify-center h-screen'>
      <div className='w-full px-4'>
      <Heading label={'Your Balance $5000'}/>
      <InputBox name={'Users'} place={'Search users...'}/>

      <div>
        <ul className='pt-4 space-y-4'>
          <li><button className='border rounded-full bg-slate-200 border-slate-100 px-2 '>S</button> User 1</li>
          <li><button className='border rounded-full bg-slate-200 border-slate-100 px-2 '>S</button> User 2</li>
          <li><button className='border rounded-full bg-slate-200 border-slate-100 px-2 '>S</button> User 3</li>
        </ul>
      </div>
      </div>
    </div>  
    </div>
  )
}

export default Dashboard