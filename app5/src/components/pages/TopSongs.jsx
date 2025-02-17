import React, { useEffect, useMemo, useState } from 'react';
import Axios from 'axios';
import Track from '../TrackCard';
import LoadingPage from '../LoadingPage';

export default function TopSongs() {

    const [loading, setLoading] = useState(true); // Stato per gestire il caricamento
    const [error, setError] = useState(null); // Stato per gestire gli errori

    const [infoTracks, setInfoTracks] = useState({
        tracks: [],
        orderMode: 'p',
        quantity: 5
    });
    useEffect(() => {
        const fetchTopArtistsTracks = async () => {
            try {
                const response = await Axios.get(`https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=${infoTracks.quantity}`, {
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
                })
                response.data.items.sort(function (a, b) {
                    return a.popularity - b.popularity;
                })
                setInfoTracks({
                    ...infoTracks,
                    tracks: response.data.items
                })
            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false); // Imposta il caricamento su false indipendentemente dall'esito
            }
        }
        fetchTopArtistsTracks()
    }, [infoTracks.quantity])



    if (loading) {
        return <LoadingPage />;
    }

    if (error) {
        if(error.includes("401")) {
            return <p>Per favore effettua nuovamente il login</p>           
        }
        return <p>Si è verificato un errore: {error}</p>;
    }

    const handleOrder = e => {
        if(e.target.value == 'p') {
            infoTracks.tracks.sort(function (a, b) {
                return a.popularity - b.popularity;
            })
        } else {
            infoTracks.tracks.sort(function (a, b) {
                if (a.name < b.name) {
                    return -1;
                }
                if (a.name > b.name) {
                    return 1;
                }
                return 0;
            })
        }
        setInfoTracks({
            ...infoTracks,
            orderMode: e.target.value
        })
    }
    const handleQuantity = e => {
        setInfoTracks({
            ...infoTracks,
            quantity: e.target.value
        })
    }
   
   
    return (
        <>
            <div className='container'>
                <>
                    <div className='row'>
                        <div className='col-auto'>
                            <button className="dropdown-toggle btn btn-light border border-success border-1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Ordina
                            </button>
                            <ul className="dropdown-menu">

                                <li>
                                    <input type='radio' className="dropdown-item btn-check"  name="options" id="btn-check-1" autoComplete="off" onClick={handleOrder} value={'p'} />
                                    <label className="btn" htmlFor="btn-check-1">Per popolarità</label>
                                </li>
                                <li>
                                    {/* <button className="dropdown-item" onClick={handleOrder} value={'n'}>Per Nome</button> */}
                                    <input type='radio' className="dropdown-item btn-check"  name="options" id="btn-check-2" autoComplete="off" onClick={handleOrder} value={'n'} />
                                    <label className="btn" htmlFor="btn-check-2">Per Nome</label>
                                </li>
                            </ul>
                        </div>
                        <div className='col-auto'>
                            <button className="dropdown-toggle btn btn-light border border-success border-1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Quantità
                            </button>
                            <ul className="dropdown-menu">
                                <li><input type='radio' name='options' className="dropdown-item btn-check" id='btn-check-3' autoComplete='off' onClick={handleQuantity} value={5} />
                                <label className="btn" htmlFor="btn-check-3">5</label>
                                </li>
                                <li><input type='radio' name='options' className="dropdown-item btn-check" id='btn-check-4' autoComplete='off' onClick={handleQuantity} value={10} />
                                <label className="btn" htmlFor="btn-check-4">10</label>
                                </li>
                                <li><input type='radio' name='options' className="dropdown-item btn-check" id='btn-check-5' autoComplete='off' onClick={handleQuantity} value={15} />
                                <label className="btn" htmlFor="btn-check-5">15</label>
                                </li>
                                <li><input type='radio' name='options' className="dropdown-item btn-check" id='btn-check-6' autoComplete='off' onClick={handleQuantity} value={20} />
                                <label className="btn" htmlFor="btn-check-6">20</label>
                                </li>
                            </ul>
                        </div>
                    </div>
                </>
                {infoTracks.tracks !== undefined || infoTracks.tracks.length !== 0 ?
                    <div className="row">
                        {infoTracks.tracks.map((item, i) => (
                            <Track data={item} key={i} />
                        ))}
                    </div>
                    :
                    <h1>nessun dato</h1>
                }
            </div>
        </>
    )
}
