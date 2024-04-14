import React from 'react'

import {
  RiYoutubeFill,
  RiLinkedinFill,
  RiGithubFill,
  RiInstallFill,
} from 'react-icons/ri'

import Link from 'next/link'

const icons=[
  {
    path:'/',
    name:<RiLinkedinFill/>
  },
  {
    path:'/',
    name:<RiGithubFill/>
  },
  {
    path:'/',
    name:<RiYoutubeFill/>
  }
]

const Socials = ({containerStyles , iconStyles}) => {
  return (
    <div className={`${containerStyles}`} >

    {icons.map((item,index)=>{
      return <Link href={item.path} key={index} >
        <div className={`${iconStyles}`} >{item.name}</div>
      </Link>
    })}

    </div>
  )
}

export default Socials