
export default function Skill() {
    return (
        <div>
            <p className={"font-bold text-3xl italic font-mono pb-2"}>I am skilled in wide range of...</p>
            <p className={"font-thin text-medium pb-10"}>I work with businees & provide solution to client with their problem</p>

            <div className="flex overflow-x-auto flex-nowrap pt-4 gap-44 pb-16">
                <div>
                    <div className="pl-12 pb-2">
                        <p className="dark:text-[#5d5d5d] mb-4">90%</p>
                        <span className="block h-[1rem] border-2 dark:border-black dark:bg-[#000] w-0 border-white"></span>
                        <span className="block h-[9rem] w-0 border-2 dark:bg-white bg-black"></span>
                    </div>
                    <div className="flex gap-2">
                        <span className="font-thin text-5xl">01</span>
                        <span>Machine<br />Learning</span>
                    </div>
                </div>
                <div>
                    <div className="pl-12 pb-2">
                        <p className="dark:text-[#5d5d5d] mb-4">80%</p>
                        <span className="block h-[2rem] border-2 dark:border-black dark:bg-[#000] w-0 border-white"></span>
                        <span className="block h-[8rem] w-0 border-2 dark:bg-white bg-black"></span>
                    </div>
                    <div className="flex gap-2">
                        <span className="font-thin text-5xl">02</span>
                        <span>Game<br />Development</span>
                    </div>
                </div>
                <div>
                    <div className="pl-12 pb-2">
                        <p className="dark:text-[#5d5d5d] mb-4">75%</p>
                        <span className="block h-[2.5rem] border-2 dark:border-black dark:bg-[#000] w-0 border-white"></span>
                        <span className="block h-[7.5rem] w-0 border-2 dark:bg-white bg-black"></span>
                    </div>
                    <div className="flex gap-2">
                        <span className="font-thin text-5xl">03</span>
                        <span>Software<br />Development</span>
                    </div>
                </div>
                <div>
                    <div className="pl-12 pb-2">
                        <p className="dark:text-[#5d5d5d] mb-4">85%</p>
                        <span className="block h-[1.5rem] border-2 dark:border-black dark:bg-[#000] w-0 border-white"></span>
                        <span className="block h-[8.5rem] w-0 border-2 dark:bg-white bg-black"></span>
                    </div>
                    <div className="flex gap-2">
                        <span className="font-thin text-5xl">04</span>
                        <span>Problem<br />Solving</span>
                    </div>
                </div>
                <div>
                    <div className="pl-12 pb-2">
                        <p className="dark:text-[#5d5d5d] mb-4">70%</p>
                        <span className="block h-[3rem] border-2 dark:border-black dark:bg-[#000] w-0 border-white"></span>
                        <span className="block h-[7rem] w-0 border-2 dark:bg-white bg-black"></span>
                    </div>
                    <div className="flex gap-2">
                        <span className="font-thin text-5xl">05</span>
                        <span>Frontend<br />Development</span>
                    </div>
                </div>
            </div>
        </div>
    );
}