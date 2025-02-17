import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { useFetchSpotifyProfile } from '../../hooks/useFetchSpotifyProfile';
// import '../../../node_modules/swiper/swiper.min.css'

export default function Profile({ googleData }) {
    const [checked, setChecked] = useState(false)
    const { data } = useFetchSpotifyProfile()

    return (
        <div className="container d-flex align-items-center justify-content-center">
            <div className="row">
                <div className="form-check form-switch">
                    <input className="form-check-input d-none" type="checkbox" role="switch" id="flexSwitchCheckChecked" onChange={e => setChecked(e.target.checked)} />
                    <label className="form-check-label" htmlFor="flexSwitchCheckChecked">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className={`bi bi-collection${checked ? "-fill" : ""}`} viewBox="0 0 16 16">
                            {
                                checked ?
                                    <path d="M0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6zM2 3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11A.5.5 0 0 0 2 3m2-2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7A.5.5 0 0 0 4 1" />
                                    :
                                    <path d="M2.5 3.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1zm2-2a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1zM0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6zm1.5.5A.5.5 0 0 1 1 13V6a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5z" />

                            }
                        </svg>
                    </label>

                </div>


                {
                    data &&
                    <div className='col'>
                        <div className="card shadow p-3 mb-5 bg-body-tertiary rounded" style={{ width: "25rem" }}>
                            <img
                                src={googleData.picture}
                                className="rounded mx-auto d-block rounded-circle"
                                alt={googleData.picture ? 'Nessuna immagine' : "Immagine di profilo"}
                                style={{ width: "120px" }}
                            />
                            <div className="card-body">
                                <h5 className="card-title">User info</h5>
                                <p className="card-text"></p>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Nome: {googleData.name}</li>
                                <li className="list-group-item">Email: {googleData.email}</li>
                            </ul>
                            <div className="card-body">

                            </div>
                        </div>
                    </div>
                }
                {
                    Object.keys(googleData).length != 0 &&
                    <div className='col'>
                        <div className="card shadow p-3 mb-5 bg-body-tertiary rounded" style={{ width: "25rem" }}>
                            <img
                                src={data.images.length === 0 ? '#' : data.images[1].url}
                                className="card-img-top"
                                alt={data.images.length === 0 ? 'Nessuna immagine' : "Immagine di profilo"}
                            />
                            <div className="card-body">
                                <h5 className="card-title">User info</h5>
                                <p className="card-text"></p>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">ID: {data.id}</li>
                                <li className="list-group-item">Nome: {data.display_name}</li>
                                <li className="list-group-item">Email: {data.email}</li>
                            </ul>
                            <div className="card-body">
                                <a href={data.external_urls.spotify} className="card-link" target="_blank" rel='noreferrer'>
                                    Apri Profilo
                                </a>
                                <a href="https://spotify.com" className="card-link" target="_blank" rel='noreferrer'>
                                    Apri Spotify
                                </a>
                            </div>
                        </div>
                    </div>
                }
            </div>

        </div>
    );
}
