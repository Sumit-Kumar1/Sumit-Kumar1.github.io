export default function contact() {
    return (
        <div>
            <h1 className="text-3xl pb-16 text-center italic font-bold">
                Don&apos;t Hesitate to Contact Me!
            </h1>
            <div className="grid grid-cols-2 justify-center justify-items-center ">
                <div className="flex flex-col gap-4 font-mono">
                    {/*<Image src={"./public/favicon.ico"} alt={"MyImage"} height={100} width={100}/>*/}
                    <p className={"text-5xl italic font-extralight"}>Sumit Kumar</p>
                    <p className={"pb-4 font-thin"}>
                        Unity Game Developer, ML & Data-Science Engineer, Frontend Developer
                    </p>
                    <hr />
                    <address className={"pt-4"}>
                        Ward No. 04, Behind Agarwal Petrol Pump, Neem Ka Thana, Sikar,
                        Rajasthan, 332713
                    </address>
                    <p className="text-green-500">kumarsumitjat298@gmail.com</p>
                    <p>+91-9828-439864 <br/> +91-6350-104794</p>
                </div>
                <form className={"flex flex-col gap-y-10 w-3/4"}>
                    <input
                        className={"dark:bg-[#1d1d1d] border-b-2 h-10 p-2 font-light"}
                        placeholder={"E-mail Address*"}
                        id={"email"}
                        type={"email"}
                        name={"email"}
                        required
                    />
                    <input
                        className={"dark:bg-[#1d1d1d] border-b-2 h-10 p-2 font-light"}
                        placeholder={"Subject*"}
                        id={"subject"}
                        type={"text"}
                        name={"subject"}
                        required
                    />
                    <textarea
                        className={"dark:bg-[#1d1d1d] border-b-2 h-20 p-2 font-light"}
                        placeholder={"Your Message*"}
                        id={"message"}
                        name={"message"}
                        required
                    />
                    <button
                        className={
                            "xs:w-full md:w-1/4 xl:w-1/3 border-2 rounded-2xl p-3 dark:hover:bg-[#0d0d0d] hover:bg-green-400 mx-auto hover:font-bold hover:cursor-pointer"
                        }
                    >
                        Send Now
                    </button>
                </form>
            </div>
        </div>
    );
}
