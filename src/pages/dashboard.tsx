"use client"
import { MetricsCard } from "@/app/components/metrics_cards";
import { Navbar } from "@/app/components/navbar";
import { Sidebar } from "@/app/components/sidebar";
import { Chart } from "@/app/components/chart";

const Dashboard = () => {
    return(
        <section className="bg-white rounded-[20px] p-10 shadow-xl relative w-[900px]">
            <Navbar />
            <Sidebar />
            <MetricsCard />
            <Chart />
        </section>
    )
}

export default Dashboard;