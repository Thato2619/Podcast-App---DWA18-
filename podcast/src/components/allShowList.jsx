import React from 'react'

function AllShowList() {
  return (
    <div className='flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer'>
        <div className='relative w-full h-56 group'>
            <div className={`absolute inset-0 justify-center items-center bg-[#090708'] bg-opacity-50 group-hover:flex `}>
                <img alt="POD_IMG" src=""/>
                <div className='mt-4 flex flex-col'>
                    <h1>Title</h1>
                    <p>Seasons</p>
                    <p>update</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AllShowList
