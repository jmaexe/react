import React from 'react'
import logoOnepiece from '../assets/onepieceIcon.jpg'
import logoSpotify from '../assets/SpotifyIcon.webp'
import { Link } from 'react-router-dom'



const Home = () => {

  const interests = [
    {
      title: 'spotify',
      icon: logoSpotify,
      description: 'More about my favourite songs...'
    }, 
    {
      title: 'onepiece',
      icon: logoOnepiece,
      description: 'More about this serie tv...'
    }
  ];

  return (
    <div className='flex justify-center flex-col items-center'>
      <div className='shadow-xl rounded-lg container w-fit'>
          <h1 className='text-3xl font-bold tracking-tight text-primary sm:text-4xl'>Ciao sono un grande appassionato di molte cose tra cui serie tv e musica !</h1>
      </div>
      <div className='divider'></div>
      <div className='flex flex-col w-full h-fit'>
        <h1 className='text-center text-3xl italic text-primary'>My interests</h1>
        <div className=' flex justify-center'>
          <div className='flex flex-wrap justify-around max-w-full w-3/4'>
            {
              interests.map(interest => (
                <div className='rounded-lg shadow-xl p-4 '>
              <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                  <Link to={interest.title}>
                    <img src={interest.icon} alt={`${interest.title} logo` }className='max-w-sm rounded-lg shadow-2xl' width={'100px'} />
                  </Link>
                  <div>
                    <h3 className="text-3xl font-bold text-secondary">{interest.title}</h3>
                    <p className="py-6">{interest.description}</p>
                    <Link to={interest.title} className='btn btn-primary'>{interest.title} Page</Link>
                  </div>
                </div>
              </div>
            </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home