'use client'

import Image from 'next/image'
import Link from 'next/link'
import Header from './components/Header'
import GenreNav from './components/GenreNav'
import AllShowList from './components/AllShowList'
import allCategories from './utils/assets/genre/allCategories'


export default function Home() {

  

  return (
<div>
    <Header />
    <GenreNav />
    <AllShowList />
</div>
   
  )
}
