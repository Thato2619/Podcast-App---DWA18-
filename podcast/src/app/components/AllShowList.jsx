import React from 'react'
import {useState} from 'react'
import {useEffect} from 'react'
import genres from '@/app/utils/assets/genre/genres';
import Shows from '../utils/assets/genre/genres'
import {allCategories} from '../utils/assets/genre/allCategories'
import Link from 'next/link'


function AllShows() {
   const [selectedFilters, setSelectedFilters ] = useState([''])
    const [fiteredItems, setFilteredItems] = useState([Shows])
    let filters = ['Personal Growth', 'Investigative Journalism', 'History', 'Comedy', 'Entertainment', 'Business', 'Fiction', 'News', 'Kids & Family']

    const handleFilterButtonClick = (selectedCategory) => {
        if (selectedFilters.includes(selectedCategory)){
            let filters = selectedFilters.filter((el) => el !== selectedCategory);
            setSelectedFilters(filters)
        } else {
            setSelectedFilters([...selectedFilters, selectedCategory])
        }
    }


    useEffect(() => {
        filterItems();
    }, [selectedFilters])

    const filterItems = () => {
        if(selectedFilters.length > 0){
            let tempItems = selectedFilters.map((selectedCategory) => {
                let temp = Shows.filter((show) => show.id === selectedCategory)
                return temp;
            });
            setFilteredItems(tempItems.flat())

        } else {
            setFilteredItems([...Shows])
        }
    }

   
  return (
<div>
    <div classsName="pb-10 bg-[#202020] text-[#e9e2e7] text-sm flex flex-wrap justidy-between border border-l-0 border-r-0 border-t-[0.4px] border-b-[1px] border-[#a07e96] py-4 px-6">
            {
                filters.map((title, id) => (
                    <button 
                        onClick={() => handleFilterButtonClick(title)}
                        className="bg-[#090708] hover:bg-[#a07e96] cursor-pointer border-2 border-[#a07e96] rounded-full text-center px-3 py-1" 
                        key={`filters-${id}`}
                        >
                        {title}
                    </button>
                ))
            }
                
            
    </div>
    <div className='"  animate-slideup rounded-lg cursor-pointer'>
        <div className=' backdrop-blur animate-slideup'>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 relative w-full h-56 group'>
            {
                Shows.map(show => (
                    <div className ='shadow-lg rounded-lg p-4 bg-white/5 bg-opacity-80 backdrop-blur' key={show.id}>
                        <img className="rounded-t-lg" alt="POD_IMG" src={show.image}/>
                        <div className='p-3'>
                            <h3 className='text-3xl font-bold text-[#e9e2e7] mb-3'>{show.title}</h3>
                            <p className='text-lg text-[#e9e2e7]'> 
                            <span className='text-lg font-bold text-[#e9e2e7]'>Season:</span> 
                                {show.seasons}</p>
                            <h5 className='text-lg font-normal text-[#a07e96]'>{show.updated}</h5>
                            
                            <div className='justify your flex items to the end by using justify-end inside your flex container'>
                                <Link href="/comedy">
                                    <button className='bg-[#fbfbf2] hover:bg-[#a39ba8] cursor-pointer border-2 border-[#090708] rounded-full text-center font-bold text-[#080708] px-3 py-1'> All Episodes</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
                
        </div>
    </div>

    </div>
  </div>
  )
}

export default AllShows

//#edf7f6
//#9dc0bc
