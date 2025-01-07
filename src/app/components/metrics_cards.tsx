import { MessagesSquare } from "lucide-react"
import Image from "next/image";
import { Union } from "../assets";

export const MetricsCard = () => {
    const cardDesign = `shadow-xl w-[250px] h-[170px] py-[10px] rounded-[20px] `;
    const line = `w-full h-[1px] bg-gray-300 mt-[0px] mb-[20px]`
    return(
        <section className="flex gap-5 mt-[50px] ml-[40px]">
            <div className={`flex flex-col ${cardDesign}`}>
                <div className={`flex justify-between px-[20px]`}>
                <div className="flex flex-col gap-0">
                <span className="text-gray-500 text-sm">NEW MESSAGES</span>
                <h1 className="font-bold text-[3rem]">85</h1>
                </div>
                <div>
                    <MessagesSquare />
                </div>
                </div>

                <span className={`${line}`}></span>
                <div className="flex flex-col px-[20px]">
                    <div className="bg-purple-200 w-full h-fit rounded-[15px] border-none">
                        <div className="bg-[#602BF8] w-[150px] h-[8px] rounded-[15px] relative">
                            <div className="absolute right-[-50px] top-[-65]">
                            <Image src={Union} alt="union" className="relative" />
                            <p className="absolute top-[30px] right-[40px] text-[0.7rem]">75%</p>
                            </div>
                        <span></span>
                        </div>
                    </div>
                    <h1 className="font-bold text-[0.8rem]">Response Rate</h1>
                </div>
            </div>
            <div className={`flex flex-col ${cardDesign}`}>
                <div className={`flex justify-between px-[20px]`}>
                <div className="flex flex-col gap-0">
                <span className="text-gray-500 text-sm">NEW LEADS</span>
                <div className="flex justify-between">
                <div className="flex flex-col">
                <h1 className="font-bold text-[3rem]">21</h1>
                <div className="flex flex-col">
                    <p className="text-[0.8rem]"><span className="font-bold">60%</span> Daily Goal</p>
                    <span className="text-[0.7rem] pl-[20px]"><span className="font-bold">72</span> This Week</span>
                </div>
                </div>
                <div className="flex px-[20px]">
                    <div className="bg-[#602BF8] w-full h-fit rounded-[15px] border-none circle p-1">
                        <div className="bg-white w-full h-[100px] rounded-[15px] relative circle">
                            <div className="absolute right-[-50px] top-[-65]">
                            <Image src={Union} alt="union" className="relative" />
                            <p className="absolute top-[30px] right-[40px] text-[0.7rem]">75%</p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                </div>
                <div>
                    <MessagesSquare />
                </div>
                </div>
            </div>
            <div className={`flex flex-col ${cardDesign}`}>
                <div className={`flex justify-between px-[20px]`}>
                <div className="flex flex-col gap-0">
                <span className="text-gray-500 text-sm">ACHIEVEMENTS</span>
                <h1 className="font-bold text-[3rem]">95</h1>
                </div>
                <div>
                    <MessagesSquare />
                </div>
                </div>

                <span className={`${line}`}></span>
                <div className="flex flex-col px-[20px]">
                    <div className="bg-purple-200 w-full h-fit rounded-[15px] border-none">
                        <div className="bg-[#602BF8] w-[180px] h-[8px] rounded-[15px] relative">
                            <div className="absolute right-[-50px] top-[-65]">
                            <Image src={Union} alt="union" className="relative" />
                            <p className="absolute top-[30px] right-[40px] text-[0.7rem]">85%</p>
                            </div>
                        <span></span>
                        </div>
                    </div>
                    <h1 className="font-bold text-[0.8rem]">Response Rate</h1>
                </div>
            </div>
        </section>
    )
}