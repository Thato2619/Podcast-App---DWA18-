'use client'

import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/Header'
import GenreNav from '@/components/GenreNav'
import allCategories from './utils/assets/genre/allCategories'


export default function Home() {

  

  return (
<div>
  <Header />
  <>
  <div classsName="bg-[#202020] text-[#e9e2e7] text-sm flex flex-wrap justidy-between border border-l-0 border-r-0 border-t-[0.4px] border-b-[1px] border-[#a07e96] py-4 px-6">
        <Link href='/comedy'>
          <button className="bg-[#090708] hover:bg-[#a07e96] cursor-pointer border-2 border-[#a07e96] rounded-full text-center px-3 py-1 ">Personal Growth</button>
        </Link>
        <Link href='/comedy'>
          <button className="bg-[#090708] hover:bg-[#a07e96] cursor-pointer border-2 border-[#a07e96] rounded-full text-center px-3 py-1 ">Investigative Journalism</button>
        </Link>
        <Link href='/comedy'>
          <button className="bg-[#090708] hover:bg-[#a07e96] cursor-pointer border-2 border-[#a07e96] rounded-full text-center px-3 py-1 ">History</button>
        </Link>
        <Link href='/comedy'>
          <button className="bg-[#090708] hover:bg-[#a07e96] cursor-pointer border-2 border-[#a07e96] rounded-full text-center px-3 py-1 ">Comedy</button>
        </Link>
        <Link href='/comedy'>
          <button className="bg-[#090708] hover:bg-[#a07e96] cursor-pointer border-2 border-[#a07e96] rounded-full text-center px-3 py-1 ">Entertainment</button>
        </Link>
        <Link href='/comedy'>
          <button className="bg-[#090708] hover:bg-[#a07e96] cursor-pointer border-2 border-[#a07e96] rounded-full text-center px-3 py-1 ">Business</button>
        </Link>
        <Link href='/comedy'>
          <button className="bg-[#090708] hover:bg-[#a07e96] cursor-pointer border-2 border-[#a07e96] rounded-full text-center px-3 py-1 ">Ficton</button>
        </Link>
        <Link href='/comedy'>
          <button className="bg-[#090708] hover:bg-[#a07e96] cursor-pointer border-2 border-[#a07e96] rounded-full text-center px-3 py-1 ">News</button>
        </Link>
        <Link href='/comedy'>
          <button className="bg-[#090708] hover:bg-[#a07e96] cursor-pointer border-2 border-[#a07e96] rounded-full text-center px-3 py-1 ">Kids & Family</button>
        </Link>
  </div>
  
  </>
  <h1>Please work</h1>
  <Link href="/comedy"><button>comedy</button></Link>
</div>
   
  )
}
