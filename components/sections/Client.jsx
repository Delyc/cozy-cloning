import { clients } from "../../data/client"
import ClientCard from "../cards/ClientCard"
export default function Client(){
    return(
        <>
        <section className="bg-black w-full py-10">
         <section className="xl:max-w-[90rem] xl:mx-auto  px-10 flex flex-col items-center gap-10">
            <h4 className="text-brown italic w-full text-[28px] text-center xl:text-[48px]">More than 150 happy clients</h4>

            <div className="xl:flex xl:flex-row xl:gap-10 xl:w-4/5  justify-between items-center flex flex-col gap-10">
        {
           clients.map((client, index) =>{
            return (
                <div key={index}>
               
                <ClientCard  client={client} />
              
           
           
                </div>
               
            )
           })
           }
           </div>
             </section>
             </section>
        </>
    )
}