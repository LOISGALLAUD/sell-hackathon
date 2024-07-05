"use client";

import { ArcElement, Chart as ChartJS } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { FaBagShopping } from "react-icons/fa6";
import { IoMdCart } from "react-icons/io";

ChartJS.register(ArcElement);

const DoughnutCharts = () => {
  const dataBag = {
    datasets: [
      {
        label: "Bag",
        data: [100, 200, 300],
        backgroundColor: ["#78D23D", "#9BE931", "#C1FF1C"],
      },
    ],
    labels: ["Bank of America", "Chase", "Wells Fargo"],
  };

  const dataCart = {
    datasets: [
      {
        label: "Carts",
        data: [5764, 4376, 5643],
        backgroundColor: ["#FF8A00", "#FFA600", "#FFC700"],
      },
    ],
    labels: ["Bank of America", "Chase", "Wells Fargo"],
  };

  return (
    <div className="p-5 bg-white xl:h-full xl:w-[40%] size-full rounded-xl shadow-md shadow-sell-dark hover:scale-105 duration-300 transition-transform">
      {/* Title */}
      <h2 className="xl:text-2xl text-xl font-semibold xl:mb-5 mb-3 text-center">
        Manage your store
      </h2>

      {/* Content Bag */}
      <div className="flex justify-center items-center gap-3">
        <div className="xl:p-4 p-2 bg-[#faf2e8] rounded-full flex justify-center items-center">
          <FaBagShopping className="xl:text-3xl text-xl text-[#EC9D40]" />
        </div>

        <div className="flex flex-col justify-start">
          <p className="xl:text-md text-sm">
            <span className="font-normal xl:font-semibold">
              Be the first to know about new orders &nbsp;
            </span>
            <span className="hidden xl:block">
              and keep track of your store's performance
            </span>
          </p>
        </div>

        <div className="xl:size-16 size-12 xl:ml-5 ml-2">
          <Doughnut
            data={dataBag}
            options={{
              cutout: "60%",
              plugins: {
                tooltip: {
                  enabled: false,
                },
                legend: {
                  display: false,
                },
              },
            }}
          />
        </div>
      </div>

      {/* Content Cart */}
      <div className="flex justify-center items-center gap-3 xl:mt-5 mt-2">
        <div className="xl:p-4 p-2 bg-[#fceaea] rounded-full flex justify-center items-center">
          <IoMdCart className="xl:text-3xl text-xl text-[#FD8B8B]" />
        </div>

        <div className="flex flex-col justify-start">
          <p className="xl:text-md text-sm flex justify-center items-center">
            <span className="font-normal xl:font-semibold flex justify-center items-center">
              Manage your products &nbsp;
            </span>
            <span className="hidden xl:block">
              and keep track of your store's performance
            </span>
          </p>
        </div>

        <div className="xl:size-16 size-12 xl:ml-5 ml-2">
          <Doughnut
            data={dataCart}
            options={{
              plugins: {
                tooltip: {
                  enabled: false,
                },
                legend: {
                  display: false,
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default DoughnutCharts;
