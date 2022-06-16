import React from 'react';
import '../../App.css';
import  './SignUp.css';
import {Button} from '../Button'
export default function SignUp() {
  return (
    <>
      <div className='sign-up'>
        <div>
          <p className='username'>Username</p>
          <input id='username' type={'text'}/>
        </div>
        <div>
          <p className='email'>Email</p>
          <input id='email' type={'email'}/>
        </div>
        <div>
          <p className='password'>Password</p>
          <input id='password' type={'text'}/>
        </div>
        <Button>
          SIGN UP
        </Button>
      </div>
    </>
  );
}
