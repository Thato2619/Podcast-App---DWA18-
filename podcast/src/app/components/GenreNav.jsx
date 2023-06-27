'use client'
import React from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'
function GenreNav() {

  const navRouter = () => {
    const router = useRouter();

    const handleClick =() => {
      router.push('/history')
    }

  
  }
  return (
    <>
    <div classsName="pb-10 bg-[#202020] text-[#e9e2e7] text-sm flex flex-wrap justidy-between border border-l-0 border-r-0 border-t-[0.4px] border-b-[1px] border-[#a07e96] py-4 px-6">
          <Link href='/'>
            <button className="bg-[#090708] hover:bg-[#a07e96] cursor-pointer border-2 border-[#a07e96] rounded-full text-center px-3 py-1 ">Home</button>
          </Link>
          <Link href='/growth'>
            <button className="bg-[#090708] hover:bg-[#a07e96] cursor-pointer border-2 border-[#a07e96] rounded-full text-center px-3 py-1 ">Personal Growth</button>
          </Link>
          <Link href='/investigative'>
            <button className="bg-[#090708] hover:bg-[#a07e96] cursor-pointer border-2 border-[#a07e96] rounded-full text-center px-3 py-1 ">Investigative Journalism</button>
          </Link>
          <Link href='/history'>
            <button className="bg-[#090708] hover:bg-[#a07e96] cursor-pointer border-2 border-[#a07e96] rounded-full text-center px-3 py-1 ">History</button>
          </Link>
          <Link href='/comedy'>
            <button className="bg-[#090708] hover:bg-[#a07e96] cursor-pointer border-2 border-[#a07e96] rounded-full text-center px-3 py-1 ">Comedy</button>
          </Link>
          <Link href='/entertainment'>
            <button className="bg-[#090708] hover:bg-[#a07e96] cursor-pointer border-2 border-[#a07e96] rounded-full text-center px-3 py-1 ">Entertainment</button>
          </Link>
          <Link href='/business'>
            <button className="bg-[#090708] hover:bg-[#a07e96] cursor-pointer border-2 border-[#a07e96] rounded-full text-center px-3 py-1 ">Business</button>
          </Link>
          <Link href='/fiction'>
            <button className="bg-[#090708] hover:bg-[#a07e96] cursor-pointer border-2 border-[#a07e96] rounded-full text-center px-3 py-1 ">Fiction</button>
          </Link>
          <Link href='/news'>
            <button className="bg-[#090708] hover:bg-[#a07e96] cursor-pointer border-2 border-[#a07e96] rounded-full text-center px-3 py-1 ">News</button>
          </Link>
          <Link href='/kids-family'>
            <button className="bg-[#090708] hover:bg-[#a07e96] cursor-pointer border-2 border-[#a07e96] rounded-full text-center px-3 py-1 ">Kids & Family</button>
          </Link>
    </div>

    
    
    </>
  )
}

export default GenreNav

