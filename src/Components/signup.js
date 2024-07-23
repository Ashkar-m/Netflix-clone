

import Bgimage from '../netflix-bg.jpg';

import React from 'react'

function Signup() {
  return (
    <div className='netflix-signUp'>

        <div className="neflix">
            <img src={Bgimage} alt="" />

            <form action="">
              <input type="text" placeholder='Enter username' />
              <input type="password" placeholder='Enter password' />
            </form>
        </div>
      
    </div>
  )
}

export default Signup
