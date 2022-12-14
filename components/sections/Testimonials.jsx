import person1 from "../../public/image/person1.webp";
import Image from "next/image";
import message from "../../public/image/message.svg";
export default function Testimonials() {
  return (
    <section className="bg-white ">
      <div className="xl:max-w-6xl w-full relative  justify-center align-middle  xl:m-auto gap-24  py-10 md:py-32  text-center">
        <div>
          <h1 className="text-black text-2xl md:text-6xl font-semibold mt-14">
            ❤️ from our clients
          </h1>
          <span className="block bg-secondary-300 m-auto w-[2.5rem] h-1 mb-24 mt-16 "></span>
        </div>
        <div className="flex w-fit  flex-col gap-8">
          <div className="fle   xl:flex xl:flex-row flex-col items-center sm:flex lg:px-0 lg:w-4/5 xl:px-6 gap-8 relative m-auto ">
            <div className=" w-[85%] justify-end py-20 px-10 xl:px-20 h-fit mt-auto mb-8 sm:mb-0  sm:w-[55%] background-client  rounded-bl-[80%]  rounded-t-[60%] bg-[#223240]">
              <Image
                className="w-fit m-auto border-4 border-white mb-10 rounded-[32%]  saturate-0 mix-blend-luminosity"
                src={person1}
                alt=""
                height={70}
                width={70}
              />
              <div className="text-right">
                <h3 className="font-semibold text-brown text-xl mb-4">
                  “One of the top design professionals…”
                </h3>
                <p className="text-white text-right text-lg">
                  I connect with hundreds of talented folks on a regular basis,
                  and I can say with complete confidence that Lee is one of the
                  best UX designers in Aquent/Vitamin T{"'"}s global network.
                </p>
                <p className="text-xs font-bold mt-5 font-geomanist tracking-[0.25rem] text-white">
                  SUSIE POLLASKY
                </p>
                <p className="mt-1 opacity-70 text-white text-xs">
                  Now: Leadership Recruiting @ Product Design
                </p>
                <p className="mt-1 opacity-70 text-white text-xs">
                  at Facebook
                </p>
              </div>
            </div>
            <div className=" justify-end py-20 px-10 w-[85%]  xl:px-16 flex-1 rounded-t-[100%] rounded-br-[80%]  background-client bg-[#2d4850]">
              <Image
                className="w-fit m-auto border-4 border-white mb-10 rounded-[32%]  saturate-0 mix-blend-luminosity"
                src={person1}
                alt=""
                height={70}
                width={70}
              />
              <div className="text-left">
                <h3 className="font-semibold text-brown text-xl mb-4">
                  “They’re a very well-rounded organization…”
                </h3>
                <p className="text-white text-lg">
                  Cost per conversion and all of those metrics have dropped
                  significantly. We used to pay an average of $100 per lead that
                  converts… now we have that down to about $20. Sessions and
                  contacts have also gone up astronomically, at least threefold.
                  Organic search and social media referrals have all continued
                  to skyrocket. We{"’"}re really pleased.
                </p>
                <p className="text-xs font-bold mt-5 font-geomanist tracking-[0.25rem] text-white">
                  MARTIN SPRITZER
                </p>
                <p className="mt-1 opacity-70 text-white text-xs">
                  General Manager @ iQuoteXpress
                </p>
              </div>
            </div>
          </div>
           <div className="sm:flex  w-4/5 md:mr-14 lg:mr-10  m-auto   gap-8 relative  ">
            <div className=" justify-end  h-fit pt-20 px-16 pb-14 mb-auto mb-8 sm:mb-0  background-client  rounded-b-[60%] rounded-tl-[80%] rounded-br-[50%]  bg-[#c47d57]">
              <Image
                className="w-fit ml-auto border-4 border-white mb-10 rounded-[32%]  saturate-0 mix-blend-luminosity"
                src={person1}
                alt=""
                height={70}
                width={70}
              />
              <div className="text-right">
                <h3 className="font-extrabold text-white opacity-80 text-xl mb-4">
                  {"“"}They{"'"}re just good people.{"”"}
                </h3>
                <p className="text-white text-lg">
                  They were a pleasure to work with and I{"'"}m really happy
                  with the results. They pretty much nailed it.
                </p>
                <p className="text-xs mt-5 font-bold font-geomanist tracking-[0.25rem] text-white">
                  ERIC WEISS
                </p>
                <p className="mt-1 opacity-70 text-white text-xs">
                  Founder @ Full Cycle Product Development
                </p>
              </div>
            </div>
            <div className=" justify-end py-20 px-16 h-fit mb-auto  background-client  w-fit rounded-b-[60%] rounded-tr-[80%] rounded-bl-[50%] bg-[#b55730] mt-10 xl:mt-0">
              <Image
                className="w-fit mr-auto border-4 border-white mb-10 rounded-[32%]  saturate-0 mix-blend-luminosity"
                src={person1}
                alt=""
                height={70}
                width={70}
              />
              <div className="text-left">
                <h3 className="font-semibold text-white opacity-80 text-xl mb-4">
                  {"“"}The project was successful{"”"}
                </h3>
                <p className="text-white text-lg">
                  They strive to come up with good design, and they focus on all
                  the right things. The quality of their work is high, and all
                  the deliverables are very well-organized and professional.
                </p>
                <p className="text-xs mt-5 font-bold font-geomanist tracking-[0.25rem] text-white">
                  MICHAEL WEISFELD
                </p>
                <p className="mt-1 opacity-70 text-white text-xs">
                  Founder @ Full Cycle Product Development
                </p>
              </div>
            </div>
          </div> 
        </div>
        <div className="absolute   left-32 hidden md:flex md:top-[25rem] lg:top-[30rem] inset-0 flex client-btn-border w-fit h-fit justify-center   rounded-full  m-auto items-center">
          <div className="border-[#C8C7C0] bg-opacity-30 border-2 p-2 rounded-full">
            <div className="border-[#DCD7CF] border-2 p-2 rounded-full">
              <div className="border-red-50 borde w-[5rem] h-[5rem] flex justify-center bg-white rounded-full">
                <Image src={message} alt="" height={32} width={32} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
