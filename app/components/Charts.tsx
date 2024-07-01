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
      <div
        className="bg-white inline-block z-[-1]
        rounded-[2rem] size-full gap-10 h-96 w-[88%] opacity-25"
      />
      <div
        className="bg-white inline-block z-[-1]
        rounded-[2rem] size-full gap-10 h-96 w-[92%] opacity-50"
      />
      <div
        className="bg-white inline-block z-[-1]
        rounded-[2rem] size-full gap-10 h-96 w-[96%]"
      />
      {/* Charts */}
      <div
        className="bg-gradient-to-r from-sell-primary to-sell-secondary 
     rounded-[2rem] size-full p-16 gap-10 h-96 z-10 overflow-hidden
      flex flex-row justify-between items-center"
      >
        <DoughnutCharts />
        <SalesFigures />
        <BeamChart />
      </div>
    </section>
  );
};

export default Charts;
