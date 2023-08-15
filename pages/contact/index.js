export default function contact() {
    return (
            <div className="grid mobile:grid-cols-1 sm:grid-cols-2 justify-center justify-items-center p-28 w-full text-center gap-10">
                {/* Personal info part */}
                <div className="flex flex-col gap-4 font-mono ">
                    {/*<Image src={"./public/favicon.ico"} alt={"MyImage"} height={100} width={100}/>*/}
                    <p className={"text-5xl italic font-extralight"}>Sumit Kumar</p>
                    <p className={"pb-4 font-thin"}>
                        Go Backend Developer, Unity Game Developer, ML & Data-Science Engineer, Frontend Developer
                    </p>
                    <hr />
                    <address className={"pt-4"}>
                        Ward No. 03, Behind Agarwal Petrol Pump, Neem Ka Thana, Sikar,
                        Rajasthan, 332713
                    </address>
                    <p className="text-green-500">kumarsumitjat298@gmail.com</p>
                    <p>+91-9828-439864 <br/> +91-6350-104794</p>
                </div>
                {/* email to form */}
                <form className={"flex flex-col gap-y-10 w-3/4"}>
                    <input
                        className={"dark:bg-[#1d1d1d] border-b-2 h-10 p-2 font-light rounded-md"}
                        placeholder={"E-mail Address*"}
                        id={"email"}
                        type={"email"}
                        name={"email"}
                        required
                    />
                    <input
                        className={"dark:bg-[#1d1d1d] border-b-2 h-10 p-2 font-light rounded-md"}
                        placeholder={"Subject*"}
                        id={"subject"}
                        type={"text"}
                        name={"subject"}
                        required
                    />
                    <textarea
                        className={"dark:bg-[#1d1d1d] border-b-2 h-20 p-2 font-light rounded-md"}
                        placeholder={"Your Message*"}
                        id={"message"}
                        name={"message"}
                        required
                    />
                    <button
                        className={
                            "xs:w-full md:w-1/4 xl:w-1/3 border-2 rounded-2xl p-3 dark:hover:bg-[#0d0d0d] hover:bg-green-400 mx-auto hover:font-bold hover:cursor-pointer text-center"
                        }
                    >
                        Send Now
                    </button>
                </form>
            </div>
    );
}
