import React from 'react'
import { useNavigate } from 'react-router-dom'

function Public() {
    const navigate = useNavigate();

    function login() {
        navigate('/private');
    }

    return (
        <div className='main1'>
            <header>
                <b>Navigation</b>
                <button onClick={login}>Login</button>
            </header>
            <div className="main2">
                <img src="https://cdn-icons-png.flaticon.com/512/5087/5087579.png" alt="" />
            </div>
            <footer>
                <b>Footer</b>
            </footer>
        </div>
    )
}

export default Public;
