import Image from 'next/image'
import { clients } from '../../data/client'
export default function ClientCard ({client}){
    const {imageUrl} = client
    return (
        <>
      
        <Image src={imageUrl} alt="chat" width={100} height={100}  />
      
        
        
        </>
    )
}