import { User } from '@clerk/nextjs/server'
import React from 'react'
import Image from "next/image";
import Link from 'next/link';
import { UserButton } from '@clerk/nextjs';
import { ModeToggle } from '@/components/global/mode-toggle';

type Props = {
    user?:null|User
}

const Navigation = ({user} : Props) => {
  return (
    <div className='p-4 flex items-center justify-between relative'>
        <aside className='flex items-center gap-2'>
            <Image src={"./assets/astron.svg"} alt='Plura logo' width={40} height={40}/>
            <span className='text-xl font-bold'>
                Astron
            </span>
        </aside>
        <nav className='hidden md:block absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%]'>
            <ul className='flex items-center justify-center gap-8'>
                <Link href={"#"}>Pricing</Link>
                <Link href={"#"}>About</Link>
                <Link href={"#"}>Documentation</Link>
                <Link href={"#"}>Featues</Link>
            </ul>
        </nav>
        <aside className='flex gap-2 items-center'>
            <Link href={"#"}
            className='bg-primary text-white p-2 px-4 rounded-lg hover:bg-primary/80'>
                Login
            </Link>
            <UserButton/>
            <ModeToggle/>
        </aside>    
    </div>

  )
}

export default Navigation