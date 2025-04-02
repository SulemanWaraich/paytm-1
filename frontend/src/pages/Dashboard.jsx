import React, { useState } from 'react'
import Heading from '../components/Heading';
import NavBar from '../components/NavBar';
import InputBox from '../components/InputBox';

function Dashboard() {
  const [users, setUsers] = useState(['Suleman', 'Ashfaque', 'Usama']);

  return (
    <div>
      <NavBar />
    <div className='flex justify-center h-screen'>
      <div className='w-full px-4'>
      <Heading label={'Your Balance $5000'}/>
      <InputBox name={'Users'} place={'Search users...'}/>

      <div>
        <ul className='pt-6 space-y-6 text-2xl'>
        {users.map((user) => {
          return <li> <button className='border rounded-full bg-slate-200 border-slate-100 px-2 mx-2 font-semibold'>{user[0]}</button>{user}</li>})}
        </ul>
      </div>
      </div>
    </div>  
    </div>
  )
}

export default Dashboard