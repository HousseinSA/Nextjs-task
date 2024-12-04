import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
  return (
        <Link href={'/'} className='md:w-40'>
        <Image  width={200} height={200}  alt='techno-trans logo'  src={'/logo.webp'}/>
        </Link>
  )
}

export default Logo