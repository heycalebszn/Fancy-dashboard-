import {ChartImg} from "../assets"
import Image from "next/image";

export const Chart = () =>{
    return(
    <section>
        <Image alt="chart" src={ChartImg} />
    </section>
    )
}