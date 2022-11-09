import logo from '../../public/image/logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import menu from '../../public/image/menu.png'
export default function Navbar(){

    return(
       

        <nav className='flex justify-between bg-black w-full xl:max-w-[100rem] xl:flex xl:flex-row xl:justify-between px-14 xl:items-center py-5 fixed z-50'>
            <div className='w-24'>
                <Image src={logo} alt="logo" />
                </div>
                <div className='xl:hidden'>
                    <Image src={menu} />
                
                </div>
                <ul className='hidden xl:flex xl:flex-row xl:gap-4 text-[25px]'>
                    <li><Link href="#" className='text-white'>Get cozy</Link></li>
                    <li><Link href="#"  className='text-white'>What we do</Link></li>
                    <li><Link href="#"  className='text-white'>Our work</Link></li>
                    <li><Link href="#"  className='text-white'>The blog</Link></li>
                    <li><Link href="#"  className='text-white'>Say hi</Link></li>
                </ul>
        </nav>
       
    )

}