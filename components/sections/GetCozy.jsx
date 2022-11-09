import Button from "../ui/Button";
import image5 from "../../public/image/image5.svg";
// import image2 from "../../public/image/image2.svg";
import image6 from "../../public/image/image6.webp";
import image9 from "../../public/image/image9.webp";
import image3 from "../../public/image/image3.webp";
import image4 from "../../public/image/image4.webp";
import image1 from "../../public/image/image1.webp";
import image7 from "../../public/image/image7.png";
import image8 from "../../public/image/image8.png";
import Image from "next/image";

export default function GetCozy() {
  return (
    <>
    <section className="background-about">
      <section className=" xl:max-w-[60rem] xl:gap-32 xl:mx-auto xl:flex xl:flex-row xl:justify-between px-10 py-10">
        <div className="xl:basis-[70%] flex flex-col gap-10">
          <p>🌴🐻🇺🇸</p>
          <h2 className="text-black">Get Cozy</h2>
          <h3 className="text-orange-text">
            Design & digital marketing in San Diego, California
          </h3>
          <p className="text-black">
            We’re an award-winning design shop based in South Park, San Diego.
            We efficiently combine the best parts of user experience (UX) with
            creative design and execution to create effective collateral that
            connects with the human beings who interact with them. 🤯
          </p>
          <p className="text-black">
            No epic quests for inspiration. Just pragmatic collaboration and
            efficient results from big-agency graduates with decades of
            experience.
          </p>

          <Button text="WHY DO WE DO WHAT WE DO" />
        </div>

        <div className="xl:flex xl:flex-row flex flex-col gap-11 items-center mt-10 xl:mt-0">
          <div className="flex flex-col gap-5">
            <Image src={image1} className="w-[140px]" />
            <img src="https://res.cloudinary.com/expertise-com/image/upload/f_auto,fl_lossy,q_auto/w_auto/remote_media/awards/ca_san-diego_user-experience_2020_transparent.svg" width={160} height={140} className="w-[160px]" />
            <Image src={image3} className="w-[140px]" />
            <Image src={image4} className="w-[140px]" />
          </div>
          <div className="flex flex-col gap-10">
            <Image src={image5} className="w-[140px]" />
            <Image src={image6} className="w-[140px]" />
            <Image src={image7} className="w-[120px]" />
            <Image src={image8} className="w-[140px]" />
            <Image src={image9} className="w-[150px]" />
          </div>
        </div>
      </section>
      </section>
    </>
  );
}
