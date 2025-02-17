import React, { useEffect, useState } from 'react';

import { GoogleLogin } from '@react-oauth/google';
import { useGoogle } from '../hooks/useGoogle';
import { Outlet } from 'react-router-dom';

function Navbar() {
    const { loginWithGoogle, googleData, logoutFromGoogle } = useGoogle()

    const url = 'https://accounts.spotify.com/authorize?client_id=f56f560a88aa4acab5253d3516a2287e&redirect_uri=http://localhost:3000/Home/&response_type=token&scope=user-read-private user-read-email user-library-read user-top-read'
    const [token, setToken] = useState("")


    const logoutFromSpotify = () => {
        setToken("")
        localStorage.removeItem("token")
    }


    useEffect(() => {
        const hash = window.location.hash
        let token = window.localStorage.getItem("token")
        if (!token && hash) {
            token = hash.substring(1).split("&").find(e => e.startsWith("access_token")).split("=")[1]
            window.location.href = window.location.origin
            window.localStorage.setItem("token", token)
        }

        setToken(token)


    }, [])

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/Home">
                        <img
                            src="https://w7.pngwing.com/pngs/420/432/png-transparent-spotify-logo-spotify-computer-icons-podcast-music-apps-miscellaneous-angle-logo-thumbnail.png"
                            alt="Spotify" width='50' />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {
                                token &&
                                <>
                                    <li className='nav-item'>
                                        <a className='nav-link' href='/Home'>Home</a>
                                    </li>
                                    <li className='nav-item'>
                                        <a className='nav-link' href='/Profile'>Profile</a>
                                    </li>
                                    <li className='nav-item'>
                                        <a className='nav-link' href='/Songs'>Your top Songs</a>
                                    </li>
                                </>
                            }
                        </ul>
                        {
                            !token ?
                                <>
                                    <a className='btn btn-primary' href={url}>Login with Spotify</a>
                                </>
                                :
                                <>
                                    <button className='btn btn-primary' onClick={logoutFromSpotify}> Logout from Spotify </button>
                                </>
                        }
                        {
                            googleData ?
                                <button className='btn btn-primary' onClick={logoutFromGoogle}>Logout From Google</button>
                                :
                                <GoogleLogin onSuccess={loginWithGoogle} onError={err => console.log(err)}></GoogleLogin>
                        }
                    </div>
                </div>
            </nav>
            <Outlet /></>
    )
}

export default Navbar;