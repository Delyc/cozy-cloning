import Image from "next/image";
import Link from "next/link";
import cozyblue from "../../public/image/cozy-blue.svg";
import twitter from "../../public/image/twitter.svg";
import linkedin from "../../public/image/linkedin.svg";
import fb from "../../public/image/fb.svg";
import ig from "../../public/image/ig.svg";
import email from "../../public/image/email.svg";
import tube from "../../public/image/tube.svg";
import clogo from "../../public/image/clogo.svg";
import sddd from "../../public/image/sddd2.webp";
import image5 from "../../public/image/image5.svg";
import footercomp from "../../public/image/footer-comp.png";
export default function Footer() {
  return (
    <>
      <footer>
        <div className="bg-orange-bg py-16 ">
          <div className="xl:max-w-[90rem] xl:mx-auto flex justify-center px-10">
            <h3 className="text-[#FFFFFF] font-bold">🙋 How can we help?</h3>
          </div>
        </div>
        <section className=" bg-white   px-10 xl:px-0">
          <div className=" xl:max-w-[90rem] xl:px-0 px-10  py-16 w-5/6 xl:mx-auto border-b border-orange-bg">
            <div className="xl:flex xl:flex-row justify-between items-center flex flex-col">
              <div className="xl:flex xl:flex-row flex flex-col gap-10 xl:gap-20 items-center">
                <div className="relative w-[72px]  h-[50px]">
                  <Image src={cozyblue} alt="logo" fill="layout" />
                </div>
                <ul className="text-orange-bg xl:flex xl:flex-row flex flex-col gap-2">
                  <li>
                    <Link href="#">About</Link>
                  </li>
                  <li>
                    <Link href="#">Services</Link>
                  </li>
                  <li>
                    <Link href="#">Work</Link>
                  </li>
                  <li>
                    <Link href="#">Blog</Link>
                  </li>
                  <li>
                    <Link href="#">Contact</Link>
                  </li>
                </ul>
              </div>

              <div className="xl:flex xl:flex-row xl:px-0 flex flex-col items-center gap-10 ">
                <div>
                  <Link href="#" className="text-pink flex gap-2 items-center">
                    <div className="relative w-[20px] h-[20px]">
                      <Image src={sddd} fill="layout" />
                    </div>{" "}
                    San Diego Digital Designers
                  </Link>
                </div>
                <div className="flex  gap-2">
                  <div className="bg-twitter w-8 h-8 flex justify-center items-center rounded-sm">
                    <Image src={twitter} />
                  </div>
                  <div className="bg-linkedin w-8 h-8 flex justify-center items-center rounded-sm">
                    <Image src={linkedin} />
                  </div>
                  <div className="bg-fb w-8 h-8 flex justify-center items-center rounded-sm">
                    <Image src={fb} />
                  </div>
                  <div className="bg-insta w-8 h-8 flex justify-center items-center rounded-sm">
                    <Image src={ig} />
                  </div>

                  <div className="bg-youtube w-8 h-8 flex justify-center items-center rounded-sm">
                    <Image src={tube} />
                  </div>
                  <div className="bg-clutch w-8 h-8 flex justify-center items-center rounded-sm">
                    <Image src={clogo} className="w-4" />
                  </div>
                  <div className="bg-black w-8 h-8 flex justify-center items-center rounded-sm">
                    <Image src={email} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="xl:flex xl:flex-row xl:max-w-[90rem] py-10 xl:w-5/6 xl:mx-auto xl:justify-between  w-full flex flex-col items-center">
            <div className="xl:flex xl:flex-row gap-6 flex flex-col items-center">
              <div className="relative w-[140px] h-[52px]">
                <Image src={image5} />
              </div>
              <div className="relative w-[140px] h-[73px]">
                <Image src={footercomp} fill="layout" />
              </div>

              <div className="bg-[#FFFFFF] flex gap-4 rounded-bl-3xl rounded-tr-3xl pr-5">
                <div className="bg-black w-[50px] flex justify-center items-center rounded-bl-3xl rounded-tr-3xl">
                  <Image src={clogo} className="w-6" />
                </div>
                <div>
                  <div className="flex">
                    <p className="mr-3">5.0</p>
                    <div className="flex gap-1 w-full">
                      <svg
                        className="w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#FF3D2E"
                        viewBox="0 0 12 12"
                      >
                        <g data-name="Layer 2">
                          <path
                            d="m5.94 9.38-3.11 1.88a.5.5 0 0 1-.75-.54l.83-3.53L.17 4.81a.5.5 0 0 1 .29-.87l3.6-.31L5.48.3a.5.5 0 0 1 .92 0l1.41 3.33 3.61.31a.49.49 0 0 1 .28.87L9 7.19l.82 3.53a.5.5 0 0 1-.74.54Z"
                            data-name="Layer 1"
                          />
                        </g>
                      </svg>
                      <svg
                        className="w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#FF3D2E"
                        viewBox="0 0 12 12"
                      >
                        <g data-name="Layer 2">
                          <path
                            d="m5.94 9.38-3.11 1.88a.5.5 0 0 1-.75-.54l.83-3.53L.17 4.81a.5.5 0 0 1 .29-.87l3.6-.31L5.48.3a.5.5 0 0 1 .92 0l1.41 3.33 3.61.31a.49.49 0 0 1 .28.87L9 7.19l.82 3.53a.5.5 0 0 1-.74.54Z"
                            data-name="Layer 1"
                          />
                        </g>
                      </svg>
                      <svg
                        className="w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#FF3D2E"
                        viewBox="0 0 12 12"
                      >
                        <g data-name="Layer 2">
                          <path
                            d="m5.94 9.38-3.11 1.88a.5.5 0 0 1-.75-.54l.83-3.53L.17 4.81a.5.5 0 0 1 .29-.87l3.6-.31L5.48.3a.5.5 0 0 1 .92 0l1.41 3.33 3.61.31a.49.49 0 0 1 .28.87L9 7.19l.82 3.53a.5.5 0 0 1-.74.54Z"
                            data-name="Layer 1"
                          />
                        </g>
                      </svg>
                      <svg
                        className="w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#FF3D2E"
                        viewBox="0 0 12 12"
                      >
                        <g data-name="Layer 2">
                          <path
                            d="m5.94 9.38-3.11 1.88a.5.5 0 0 1-.75-.54l.83-3.53L.17 4.81a.5.5 0 0 1 .29-.87l3.6-.31L5.48.3a.5.5 0 0 1 .92 0l1.41 3.33 3.61.31a.49.49 0 0 1 .28.87L9 7.19l.82 3.53a.5.5 0 0 1-.74.54Z"
                            data-name="Layer 1"
                          />
                        </g>
                      </svg>
                      <svg
                        className="w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#FF3D2E"
                        viewBox="0 0 12 12"
                      >
                        <g data-name="Layer 2">
                          <path
                            d="m5.94 9.38-3.11 1.88a.5.5 0 0 1-.75-.54l.83-3.53L.17 4.81a.5.5 0 0 1 .29-.87l3.6-.31L5.48.3a.5.5 0 0 1 .92 0l1.41 3.33 3.61.31a.49.49 0 0 1 .28.87L9 7.19l.82 3.53a.5.5 0 0 1-.74.54Z"
                            data-name="Layer 1"
                          />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <Link href="#" className="text-xs">
                    Based on 16 Cluthes reviews
                  </Link>
                </div>
              </div>
            </div>

            <div className="xl:flex xl:flex-row xl:justify-between xl:w-[40%] flex flex-col w-full mt-24 xl:mt-0">
              <p className="text-[14px] text-black text-center ">
                Made with <span>❤ in beautiful, sunny San Diego. ©2021</span>
              </p>
              <div className="flex gap-6 text-[14px] justify-center mt-5 xl:mt-0  text-orange-bg">
                <Link href="#">Privacy</Link>
                <Link href="#">Photo Credit</Link>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
}
