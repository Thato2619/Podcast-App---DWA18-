import React from 'react'
import Link from 'next/link'


function Comedy() {
  return (
    <div>
       comedy page
       <Link href='/shows'><h2>comedy Shows</h2></Link>
    </div>
  )
}

export default Comedy
