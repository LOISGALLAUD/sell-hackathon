"use client";
import { motion } from "framer-motion";
import BeamChart from "./BeamChart";
import DoughnutCharts from "./DoughnutCharts";
import SalesFigures from "./SalesFigures";

const Charts = () => {
  return (
    <section
      className="size-full flex flex-col -space-y-[22rem]
     justify-center items-center"
    >
      {/* Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.25 }}
        transition={{ duration: 3, opacity: { delay: 0.5 } }}
        className="bg-white inline-block z-[-1]
        rounded-[2rem] size-full gap-10 h-96 w-[88%]"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 3, opacity: { delay: 0.25 } }}
        className="bg-white inline-block z-[-1]
        rounded-[2rem] size-full gap-10 h-96 w-[92%]"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
        className="bg-white inline-block z-[-1]
        rounded-[2rem] size-full gap-10 h-96 w-[96%]"
      />
      {/* Charts */}
      <div
        className="bg-gradient-to-r from-sell-primary to-sell-secondary 
     rounded-[2rem] size-full p-16 gap-10 h-96 z-10 overflow-hidden
      flex flex-row justify-between items-center shadow-md"
      >
        <DoughnutCharts />
        <SalesFigures />
        <BeamChart />
      </div>
    </section>
  );
};

export default Charts;
