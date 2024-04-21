import React from 'react'
import Reveal from './ui/Reveal'
import Link from "next/link";
import { Button } from './ui/button';
import { Download } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex gap-x-2 items-center">

    <Link href='/' >
    <div className=' hidden md:flex hover:text-primary transition-all'  style={{"font-size": "30px","fontWeight":"500"}} > 
       VISHAL METI
       {/* <Button variant="secondary" className="gap-x-2"> */}
       
    </div>
    </Link>

    <Link target="_blank" href="https://drive.google.com/file/d/1fWMXmRvxqxnf0OU2xjn_WM-lWbN42VML/view?usp=sharing">

        <Download size={18} />
        {/* </Button> */}
      </Link>
    </div>
  )
}

export default Logo