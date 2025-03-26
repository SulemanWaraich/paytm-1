import React from 'react'
import Heading from '../components/Heading';
import SubHeading from '../components/SubHeading';
import InputBox from '../components/InputBox';
import Button from '../components/Button';
import BottomWarning from '../components/BottomWarning';

function Signup() {
  return (
    <div className='bg-slate-300 h-screen flex justify-center'>
      <div className='flex flex-col justify-center'>
      <div className='rounded-lg bg-white w-80 text-center p-2 h-max px-4'>
        <Heading label={'Sign Up'}/>
        <SubHeading description={'Enter your information to create an account'}/>
        <InputBox name={'First Name'} place={'Jhon'}/>
        <InputBox name={'Last Name'} place={'Doe'}/>
        <InputBox name={'Email'} place={'jhondoe@example.com'}/>
        <InputBox name={'Password'} place={'*****'}/> 
        <Button btnName={'Sign Up'}/>
        <BottomWarning label={"Already have an account?"} buttonText={"Login"} to={'/signin'}/>
      </div>      
      </div>
    </div>
  )
}

export default Signup