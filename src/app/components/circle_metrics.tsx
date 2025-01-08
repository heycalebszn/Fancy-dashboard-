import { Union } from "../assets";
import Image from "next/image"

export const CircleMetrics = ({percentage}: {percentage: number}) => {
    const radius = 50;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;

    return(
        <div className="flex justify-center items-center">
            <svg
            className="120 relative"
            height="100"
            viewBox="0 0 120 120"
            >
                <circle 
                cx="60"
                cy="60"
                r={radius}
                fill="transparent"
                stroke="#e9d5ff"
                strokeWidth="8"
                />
                <circle 
                cx="60"
                cy="60"
                r={radius}
                fill="transparent"
                stroke="#602BF8"
                strokeWidth="8"
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                strokeLinecap="round"
                />
            </svg>
            <div className="absolute text-center">
                
                <p className="text-sm">Goal</p>
            </div>

            <div className="absolute right-[-26px] top-0">
                <Image src={Union} alt="union" className="relative" />
                <p className="absolute top-[30px] right-[40px] text-[0.7rem]">62%</p>
            </div>
        </div>
    )
}