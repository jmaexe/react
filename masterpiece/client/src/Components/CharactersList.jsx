import React, { useEffect, useState } from 'react'
import CharacterCard from './CharacterCard'
import Loading from '../pages/Loading'
import { useQueryClient, useQuery } from '@tanstack/react-query'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import OnepieceMap from '../assets/mapOnePiece.png'
import ModalCharacter from './ModalCharacter';
import Error from '../pages/Error'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './characterList.css';
import axios from 'axios';

const CharactersList = () => {

    // const queryClient = useQueryClient();

    const [showModal, setShowModal] = useState(false)
    const [characterModal, setCharacterModal] = useState({})

    const { isPending, error, data,isSuccess,isError } = useQuery({
        queryKey: ['data'],
        // queryFn: () => wait(2000).then(() => fetch('http://localhost:5000/api/anime/onepiece/allCharactersStrawHats').then(res => res.json()))
        queryFn: async () => {
            try {
                const response = await axios('https://api.jikan.moe/v4/anime/21/characters')
                var list = response.data.data.filter(item => [62,40,305,61,309,723,724,5627,64,18938].includes(item.character.mal_id))
                return list;
            } catch(err) {
                throw err;
            }
        },
        refetchOnWindowFocus: false
    })

    // function wait(duration) {
    //     return new Promise((resolve, reject) => setTimeout(resolve, duration))
    // }

    const handleClickCharacter = e => {
        const { character } = data?.find(({ character }) => character.mal_id == e.target.value)
        console.log(character)
        setCharacterModal({ ...character })
        setShowModal(prev => !prev)
    }


    if (isPending) return <Loading />

    if (error) return <Error />

    return (
        <>
            <Swiper
                modules={[Navigation, Pagination]}
                slidesPerView={'5'}
                pagination
                navigation={{ nextEl: '.next', prevEl: '.prev', clickable: true }}
                className='rounded-md xl:block hidden shadow-xl'
                style={{ backgroundImage: `url(${OnepieceMap})`, padding: '20px' }}
            >
                {data?.map(({ character }, i) => (
                    <>
                        <SwiperSlide key={i}><CharacterCard key={character.mal_id} {...character} showModal={handleClickCharacter} /></SwiperSlide>
                    </>
                ))}
            </Swiper>
            <div className='w-full h-fit gap-4 z-20 justify-center p-2 xl:flex hidden'>
                <div className="prev">
                    <button className='btn btn-primary text-4xl'>{'<'}</button>
                </div>
                <div className="next">
                    <button className='btn btn-primary text-4xl'>{'>'}</button>
                </div>
            </div>

            <div className="xl:hidden grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {
                    isError && <Error message={error.message}/>
                }
                {isSuccess && data?.map(({ character }, i) => (
                    <CharacterCard key={character.mal_id} {...character} showModal={handleClickCharacter} />
                ))}
            </div>

            {showModal && <ModalCharacter {...characterModal} showModal={() => setShowModal(prev => !prev)} show={showModal} />}

        </>
    )
}

export default CharactersList