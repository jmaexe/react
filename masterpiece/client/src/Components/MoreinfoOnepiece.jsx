import React from 'react'
import Loading from '../pages/Loading'
import { useQuery } from '@tanstack/react-query'
import Error from '../pages/Error'
import axios from 'axios';

const MoreinfoOnepiece = () => {

  const { isPending, error, data } = useQuery({
    queryKey: ['moreinfo'],
    queryFn: async () => {
      try {
        const response = await axios('https://api.jikan.moe/v4/anime/21/moreinfo')
        return response.data.data;
      } catch (err) {
        throw err
      }
    }
  }
  )

  return (
    <>

      {
        isPending ?
          <Loading />
          :
          (
            error ?
              <Error />
              :
              <div>
                <div className="divider">
                  <h2 className='text-primary text-2xl md:text-3xl'>More Info</h2>
                </div>
                <p className='text-justify 2xl:text-base sm:text-lg xl:text-sm'>{data.moreinfo}</p>
              </div>
          )
      }
    </>
  )
}

export default MoreinfoOnepiece