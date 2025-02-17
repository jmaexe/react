import React, { useState } from 'react'
import Loading from '../pages/Loading'
import { QueryClient,QueryClientProvider,useQuery,useQueryClient } from '@tanstack/react-query'
import ModalCharacter from './ModalCharacter'


const CharacterCard = ({ mal_id, images, name, showModal }) => {
    

    return (
        <>
            <div className="card w-40 md:w-48 bg-base-100 shadow-xl ">
                <figure className='basis-1/2'><img src={images.jpg.image_url} alt={`${name} picture`} /></figure>
                <div className="card-body">
                    <h2 className="card-title text-primary text-center md:text-2xl">{name}</h2>
                    <p></p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-primary" onClick={showModal} value={mal_id}>Description</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CharacterCard