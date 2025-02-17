import React from 'react'
import { useQuery } from '@tanstack/react-query';
import MoreinfoOnepiece from './MoreinfoOnepiece';
import Loading from '../pages/Loading';
import axios from 'axios';
import Error from '../pages/Error';

const MainOnepiece = () => {

    const informations = ["type", "episodes", "status", "source", "duration", "rating"]


    const { data, isPending, error,isError ,isSuccess} = useQuery(
        {
            queryKey: ['onepiece'],
            queryFn: async () => {
                try {
                    const response = await axios('https://api.jikan.moe/v4/anime/21');
                    return response.data.data;
                } catch (error) {
                    throw error;
                }
            },
            refetchOnWindowFocus: false
        },
    )


    return (
        <>
        {
            console.log('reeturn : ',data)
        }
            {
                isPending && <Loading />
            }
            {
                isError && <Error message={error.message}/>
            }
            {
                
                isSuccess && <div className="flex flex-col xl:flex-row p-5 gap-6 shadow-xl rounded-lg ">
                <figure className='flex justify-center'><img className="rounded-lg" src={window.innerWidth >= 1280 ? data.images.jpg.large_image_url : data.images.jpg.image_url} alt="One Piece Image" /></figure>
                <div className='flex flex-col gap-3'>
                    <div className="divider">
                        <h2 className="text-primary text-2xl">Informations</h2>
                    </div>
                    <ul className="list-disc p-2 shadow-xl  xl:text-sm sm:text-lg 2xl:text-base">
                        {
                            informations.map((key, i) => (
                                <li key={i}>{key}: {!data[key] ? "Unknown" : data[key]}</li>
                            ))
                        }
                        <li>aired: {data.aired.string}</li>
                        <li>broadcast: {data.broadcast.string}</li>
                        <li>producers: {data.producers.map(producer => (`${producer.name}`)).join(",")}</li>
                        <li>licensors: {data.licensors.map(licensor => (`${licensor.name}`)).join(",")}</li>
                        <li>studios: {data.studios[0].name}</li>
                        <li>genres: {data.genres.map(genre => (`${genre.name}`)).join(",")}</li>
                        <li>demographic: {data.demographics[0].name}</li>
            
                    </ul>
                    <div className="stats shadow-xl">
                        <div className="stat">
                            <div className="stat-title ">Score</div>
                            <div className="stat-value ">{data.score}</div>
                            <div className="stat-desc  xl:text-base sm:text-lg">by {data.members} members of <a href={"https://myanimelist.net/anime/21"} className="text-sky-400 after:content-['_↗']" target='_blank'>MyAnimeList</a></div>
                        </div>
                    </div>
                </div>
            
            </div>
            }
            <div className='rounded-lg shadow-xl basis-1/2 flex flex-col gap-2 p-5 m-auto'>
                <div>
                    <div className="divider">
                        <h2 className='text-primary text-2xl md:text-3xl'>Summary</h2>
                    </div>
                    <p className='text-justify  2xl:text-base sm:text-lg xl:text-sm'>{isSuccess && data.synopsis}</p>
                </div>
                <MoreinfoOnepiece />
            </div>
        </>
    )
}

export default MainOnepiece