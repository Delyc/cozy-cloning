import Button from "../ui/Button";
import heroImage from '../../public/image/hero-image.png'
import Image from 'next/image'
export default function Herosection(){
    return (
        <>
        <section className="hero-section  bg-black ">
            <div className="xl:max-w-[90rem] xl:mx-auto xl:flex xl:flex-row xl:justify-between px-10 gap-10 ">
            <div className="xl:basis-[45%] xl:py-10 flex flex-col gap-10">
                <h1 className="text-brown font-fraunces144ptsupersoft font-extrabold xl:leading-[1.2] leading-[1]  mt-32 xl:mt-20">Your design team for the cost of a salary.</h1>
                <h4 className="text-white text-[30px]">Full-service design support that growing B2B and non-profit organizations need. Are you strained because you should have a design team but you don't?</h4>
    <Button text="SEE HOW WE WORK & WHAT WE CAN DO"/>
            </div>
            <div className="basis-[50%] flex justify-end items-end ">

                <Image src={heroImage} alt="hero-image" className=""/>
               

                

            </div>
            </div>

        </section>
        </>
    )
}