import { MessagesSquare } from "lucide-react"
import Image from "next/image";

export const MetricsCard = () => {
    const cardDesign = `shadow-xl w-[250px] h-[170px] py-[10px] rounded-[20px] `;
    const line = `w-full h-[1px] bg-gray-300 mt-[0px] mb-[20px]`
    return(
        <section className="flex gap-5 mt-[50px]">
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
                        <div className="bg-purple-600 w-[150px] h-[8px] rounded-[15px] relative">
                        <Image src={Union} className="absolute right-0 top-0" />
                        </div>
                    </div>
                    <h1 className="font-bold text-[0.8rem]">Response Rate</h1>
                </div>
            </div>
        </section>
    )
}