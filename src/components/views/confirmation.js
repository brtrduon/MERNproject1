import React from 'react'
import { Link } from 'react-router-dom'

const Confirmation = () => {
    return (
        <div className='body'>
            <p>
                Your confirmation has been confirmed.
            </p>
            <p>
                <Link to='/'>Click here</Link> to return to the home page.
            </p>
        </div>
    )
}

export default Confirmation