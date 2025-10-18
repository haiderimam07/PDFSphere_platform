import React from 'react'
import UserButton from "@/components/user-button";
import Link from 'next/link';
import { Button } from "@/components/ui/button";
const Navbar = () => {
  return (
    <div className='flex bg-black text-white items-center justify-between gap-4 '>
      <div className='text-white px-6'>
        <Button>
            <Link href="/">Home</Link>
          </Button>
      </div>
      <UserButton/>
    </div>
  )
}

export default Navbar
