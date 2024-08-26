import React from 'react'
import { useNavigate } from 'react-router-dom'

function Private() {
    const navigate = useNavigate();
    function logout() {
        navigate('/public');
    }

    return (
        <div className='main1'>
            <header>
                <b>Navigation</b>
                <button onClick={logout}>Logout</button>
            </header>
            <div className="main">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXlCUnNO6Xap2bDv6UKzGJtPNvsZdyGLYtEA&s" alt="" />
            </div>
            <footer>
                <b>Footer</b>
            </footer>
        </div>
    )
}

export default Private;
