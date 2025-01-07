import { MessageCircle } from "lucide-react"

export const Sidebar = () => {
    return(
        <section className="absolute left-[-20px] top-[70px] m-auto bg-[#602BF8] rounded-full flex flex-col w-[62px] h-[269px] py-5 px-3 items-center">
            <MessageCircle className="w-[37px] text-white" />
        </section>
    )
}