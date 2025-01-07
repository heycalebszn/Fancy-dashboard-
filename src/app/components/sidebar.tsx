import { TbFileInvoice, TbMailOpened } from "react-icons/tb"
import { LiaQuestionCircle } from "react-icons/lia";
import { RxQuestionMarkCircled } from "react-icons/rx";
import { GrAppsRounded } from "react-icons/gr";
import { CgMediaPodcast } from "react-icons/cg";

export const Sidebar = () => {
    return(
        <section className="absolute left-[-30px] top-[70px] bg-[#602BF8] rounded-full flex flex-col w-[62px] h-[269px] py-[15px] px-3 items-center justify-center m-auto gap-4">
            <TbMailOpened className="text-[20px] text-white" />
            <LiaQuestionCircle className="text-[20px] text-white" />
            <TbFileInvoice className="text-[20px] text-white" />
            <CgMediaPodcast className="text-[20px] text-white" />
            <GrAppsRounded className="text-[20px] text-white" />
            <RxQuestionMarkCircled className="text-[20px] text-white" />
        </section>
    )
}