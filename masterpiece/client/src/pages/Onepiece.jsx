import React from 'react';
import { useState, useEffect, useContext } from 'react'
import Loading from './Loading';
import backgroundImageOnePiece from '../assets/onepiece.jpg'
import { useQuery } from '@tanstack/react-query';
import ImageLogo from '../assets/image.png'
import CharactersList from '../Components/CharactersList';
import Error from './Error'
import axios from 'axios'
import MainOnepiece from '../Components/MainOnepiece'

const Onepiece = () => {

  return (
    <>
      <div className="bg-top h-full text-lg md:text-base" style={{ backgroundImage: `url(${backgroundImageOnePiece})`, backgroundAttachment: 'fixed' }}>
        <div className="h-full w-full bg-black bg-opacity-70 grid place-content-center ">
          {/* <div className="max-w-md"> */}
          <div className='place-content-center md:grid hidden p-5 h-screen'>
            <img src={ImageLogo} alt="" className='lg:h-auto w-auto h-32 rounded-md opacity-85' id='logo' />
          </div>

          <div className="container flex flex-col lg:flex-row p-2 rounded-lg h-fit bg-base-100 w-full sm:m-4 my-4" id='main'>
                 <MainOnepiece/>
          </div>
          <div className='flex align-middle justify-center' id='characters'>
            <div className='container px-10 flex justify-center items-center flex-col gap-3 bg-base-100 rounded-md'>
              <h1 className='uppercase text-3xl lg:text-5xl text-primary '>Strawhats Crew</h1>
              <CharactersList />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Onepiece