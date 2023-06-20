import React from 'react'
import {useState} from 'react'
import {useEffect} from 'react'
import genres from '@/app/utils/assets/genre/genres';
import Shows from '../app/utils/assets/genre/genres'


function AllShows() {


  return (
  <div className='"  animate-slideup rounded-lg cursor-pointer'>
    <div className=' backdrop-blur animate-slideup'>
    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 relative w-full h-56 group'>
        {
            Shows.map(show => (
                <div className ='shadow-lg rounded-lg p-4 bg-white/5 bg-opacity-80 backdrop-blur '>
                    <img className="rounded-t-lg" alt="POD_IMG" src={show.image}/>
                    <div className='p-3'>
                        <h3 className='text-3xl font-bold text-[#e9e2e7] mb-3'>{show.title}</h3>
                        <p className='text-lg text-[#e9e2e7]'> 
                        <span className='text-lg font-bold text-[#e9e2e7]'>Season:</span> 
                            {show.seasons}</p>
                        <h5 className='text-lg font-normal text-[#a07e96]'>{show.updated}</h5>
                    </div>
                </div>
            ))}
    </div>
</div>

  </div>
  )
}

export default AllShows

/**
 *  <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
 *  
 * </div>
 * 
 * 
 * <div className=" relative w-full h-56 group">
 * 
 * </div>
 * 
 * 
 * 
 *   <div className='p-4 bg-white/5 bg-opacity-80 backdrop-blur animate-slideup'>
    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 relative w-full h-56 group'>
        {
            Shows.map(show => (
                <div className ='shadow-lg rounded-lg'>
                    <img className="rounded-t-lg" alt="POD_IMG" src={show.image}/>
                    <div className='p-3'>
                        <h3 className='text-3xl font-bold text-[#e9e2e7] mb-3'>{show.title}</h3>
                        <p className='text-lg text-[#e9e2e7]'> 
                        <span className='text-lg font-bold text-[#e9e2e7]'>Season:</span> 
                            {show.seasons}</p>
                        <h5 className='text-lg font-normal text-[#a07e96]'>{show.updated}</h5>
                    </div>
                </div>
            ))}
    </div>
</div>
 */

