import {ChartImg} from "../assets"
import Image from "next/image";

export const Chart = () => {
    return(
    <section className="ml-[40px] mt-[30px]">
        <Image alt="chart" src={ChartImg} className="w-[790px]" />
    </section>
    )
}
