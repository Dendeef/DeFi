import React from 'react'
import './Signup.css'

import trade from '../assets/trade.png'

const Signup = () => {
    return (
        <div className='signup'>
            <div className='container' id="earn">
                {/* left */}
                <div className='left'>
                    <img src={trade} alt='' />
                </div>


                {/* right */}
                <div className='right'>
                    <h2>Earn passive income with crypto.</h2>
                    <br/>
                    <div className='input-container'>

                        <input type='email' placeholder='Enter your email' />
                        <button className='btn'>Learn More</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Signup