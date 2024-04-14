import React from 'react'
import Reveal from './ui/Reveal'
import Link from "next/link";

const Logo = () => {
  return (
    <Link href='/' >
    <div className=' hidden md:flex hover:text-primary transition-all'  style={{"font-size": "30px","fontWeight":"500"}} > 
       VISHAL METI
    </div>
    </Link>
  )
}

export default Logo