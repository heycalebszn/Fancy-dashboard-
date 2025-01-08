import Image from "next/image";

export const CircleMetrics = ({percentage}: {percentage: number}) => {
    const radius = 50;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;

    return(
        <div className="flex justify-center items-center">
            <svg
            className="120"
            height="120"
            viewBox="0 0 120 120"
            >
                <circle 
                cx="60"
                cy="60"
                r={radius}
                fill="transparent"
                stroke="gray"
                strokeWidth="10"
                />
            </svg>
        </div>
    )
}