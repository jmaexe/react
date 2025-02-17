import React from 'react';

function Track(props) {
    

    const parseDuration_ms = () => {
        var ms = props.data.duration_ms;
        var secondsTot = Math.floor(ms/1000);
        var minutes = Math.floor(secondsTot/(60));
        var seconds = Math.floor(secondsTot%60)
        return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds }`
    }

    return (
        <>
            <div className="card shadow p-3 mb-5 bg-body-tertiary rounded m-1" style={{ width: '16rem' }}>
                <img src={props.data.album.images[0].url} className="card-img-top" alt="..." />
                {/*card-img-top */}
                <div className="card-body">
                    <h5 className="card-title">{props.data.name} | Track n.{props.data.track_number}</h5>
                    <p className="card-text"></p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">duration: {parseDuration_ms()} min</li>
                    <li className="list-group-item">Popularity: {props.data.popularity}% </li>
                </ul>
            </div>
        </>
    )
}

export default Track;