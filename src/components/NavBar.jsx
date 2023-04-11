import React from 'react'
import '../css/NavBar.css'

export default function NavBar() {
    return (

        <div className='NavContainer'>
            <div className="ProfileImageParent">
                <img src="https://avatars.githubusercontent.com/u/93534675?v=4" alt="profile pic" className='ProfileImage' />
                <div className="NavElements">
                    <ul>
                        <li>HOME</li>
                        <li>INTRO</li>
                        <li>PROJECT</li>
                        <li>CONTACT ME</li>
                    </ul>
                </div>
            </div>
        </div>

    )
}
