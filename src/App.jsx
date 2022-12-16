import { useState } from 'react';
import './App.css'

function App() {
  const [emailPoor, setEmailPoor] = useState (false)
  const [emailError, setEmailError] = useState ('Email cannot be empty')
  const [name, SetName] = useState(' ')
  const [rename, SetDelete] = useState('Registration')
  const VisionEmpty = (e) => {
    switch (e.target.name) {
      case 'email':
        setEmailPoor(true)
        break;
    }
  }
  const reg  = () => {
    SetName(name + 'Success! Thank you for registering')
    SetDelete(name + ' ')

}
  return (
    <>
    <div className='reg'>
      <form className='form'>
        <h1 className='text'>{rename}</h1>
        <h1 className='suc'>{name}</h1>
        <input onBlur={e => VisionEmpty(e)} name='name' type="text" placeholder='First name' className='name' />
        <input name='surname' type="text" placeholder='Last name'className='surname'/>
        {(emailPoor && emailError) && <div>{emailError}</div>}
        <input onBlur={e => VisionEmpty(e)} name='email' type="text" placeholder='Email'className='email'/>
        <button onClick={reg} type='button' className='btn'>Sign Up</button>
      </form>
    </div>
    </>
  );
}

export default App;
