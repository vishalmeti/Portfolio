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
    path:'https://www.linkedin.com/in/vishal-meti-280876219/',
    name:<RiLinkedinFill/>
  },
  {
    path:'https://github.com/vishalmeti?tab=repositories',
    name:<RiGithubFill/>
  },
  {
    path:'https://www.youtube.com/channel/UCO3snDb8yGJYyPyGQbmddlA',
    name:<RiYoutubeFill/>
  }
]

const Socials = ({containerStyles , iconStyles}) => {
  return (
    <div className={`${containerStyles}`} >

    {icons.map((item,index)=>{
      return <Link href={item.path} key={index} target='_blank' >
        <div className={`${iconStyles}`} >{item.name}</div>
      </Link>
    })}

    </div>
  )
}

export default Socials