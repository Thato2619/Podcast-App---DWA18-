'use client'

import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/Header'


export default function Home() {
  return (
<div>
  <Header />
  <h1>Please work</h1>
  <Link href="/comedy"><button>comedy</button></Link>
</div>
   
  )
}
