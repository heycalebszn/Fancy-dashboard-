"use client"
import { MetricsCard } from "@/app/components/metrics_cards";
import { Navbar } from "@/app/components/navbar";
import { Sidebar } from "@/app/components/sidebar";

const Dashboard = () => {
    return(
        <section className="bg-white rounded-md p-5 shadow-xl relative w-[1000px]">
            <Navbar />
            <Sidebar />
            <MetricsCard />
            
        </section>
    )
}

export default Dashboard;