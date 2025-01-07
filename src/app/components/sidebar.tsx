import { MessageCircle } from "lucide-react"

export const Sidebar = () => {
    return(
        <section className="absolute left-[-20px] top-[70px] m-auto bg-[#602BF8] rounded-full flex flex-col w-fit h-fit py-3 px-3 items-center">
            <MessageCircle className="bg-purple-900 rounded-full p-3" />
            <MessageCircle />
            <MessageCircle />
            <MessageCircle />
            <MessageCircle />
        </section>
    )
}