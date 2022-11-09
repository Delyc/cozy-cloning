import Image from 'next/image'
import Link from 'next/link'
import sddg from '../../public/image/sddd.svg'
export default function VideoDemo(){
    return(
        <>
        <section className=' bg-[#000000] xl:w-full h-[55rem] xl:h-[30rem]  relative bg-opacity-80 '>
            
                <video className='w-full -z-10 absolute h-full object-cover' src='/image/vid.mp4' controls autoPlay loop></video>
           
            <section className=' relative top-32 items-center xl:max-w-[90rem] xl:mx-auto xl:flex xl:flex-row  justify-center xl:gap-32 px-10 flex flex-col gap-16'>
            <div className='w-[140px] h-[119px]'>
                <Image src={sddg} />

            </div>
            <div className='xl:w-[50%] flex flex-col gap-4 '>
                <h3 className='text-white'>Psst… <br />
are you a designer?</h3>
<p className='text-white text-[20px]'>
Consider joining our <Link href="#" className='text-pink font-bold'>San Diego Design Designers</Link> group. More than 700 people, we meet online via Slack and in person at social events around the city. It’s a great opportunity to share ideas, get inspired, find support, and celebrate great design.
</p>
            </div>
            </section>

        </section>
      
        </>
    )
}