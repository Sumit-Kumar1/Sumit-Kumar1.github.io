export default function ContactMe(){
    return(
        <div className={"min-h-full max-h-full align-middle mx-20 my-28 p-10 justify-items-center"}>
            <h1 className={"text-2xl py-5"}>Don't Hesitate to Contact Me!</h1>
            <div className={"grid grid-cols-2 justify-center justify-items-center"}>
                <div className={"flex flex-col gap-4"}>
                    <img alt={"MyImage"}/>
                    <p className={"text-md font-semibold"}>Sumit Kumar</p>
                    <p className={"pb-5"}>Unity Game Developer, ML Engineer, Frontend Developer</p>
                    <hr/>
                    <address>Ward No. 04, Behind Agarwal Petrol Pump, Neem Ka Thana, Sikar, Rajasthan, 332713</address>
                    <p>kumarsumitjat298@gmail.com</p>
                    <p>98-2843-9864, 63-5010-4794</p>
                </div>
                <form className={"flex flex-col gap-y-10 w-3/4"}>
                    <input className={"bg-[#1d1d1d] border-b-2 h-10 p-2 font-light"} placeholder={"E-mail Address*"} id={"email"} type={"email"} name={"email"} required/>
                    <input className={"bg-[#1d1d1d] border-b-2 h-10 p-2 font-light"} placeholder={"Subject*"} id={"subject"} type={"text"} name={"subject"} required/>
                    <textarea className={"bg-[#1d1d1d] border-b-2 h-20 p-2 font-light"} placeholder={"Your Message*"} id={"message"} name={"message"} required/>
                    <button className={"xs:w-full md:w-1/2 xl:w-1/4 border-2 rounded-full p-3 hover:bg-[#1d1d1d] mx-auto hover:font-bold hover:cursor-pointer"}>Send Now</button>
                </form>
            </div>
        </div>
    );
}