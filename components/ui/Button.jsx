import Link from 'next/link'
export default function Button({ text, styles }){
    return (
        <>
        <button
        className={`buttons font-geomanist font-bold bg-orange-bg  text-white text-[20px] py-3 px-10   ${styles} `}
      >
        <Link className=" py-2 " href="#"> <span className="spanned "> {text}</span>
         
        </Link>
      </button>
        </>
    )
}