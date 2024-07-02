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
    <div className="p-5 bg-white h-full w-[40%] rounded-xl shadow-md shadow-sell-dark">
      {/* Title */}
      <h2 className="text-2xl font-semibold mb-5 text-center">
        Manage your store
      </h2>

      {/* Content Bag */}
      <div className="flex justify-center items-center gap-3">
        <div className="p-4 bg-[#faf2e8] rounded-full flex justify-center items-center">
          <FaBagShopping className="text-3xl text-[#EC9D40]" />
        </div>

        <div className="flex flex-col justify-start">
          <p className="text-md">
            <span className=" font-semibold">
              Be the first to know about new orders &nbsp;
            </span>
            and keep track of your store's performance
          </p>
        </div>

        <div className="size-16 ml-5">
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
      <div className="flex justify-center items-center gap-3 mt-5">
        <div className="p-4 bg-[#fceaea] rounded-full flex justify-center items-center">
          <IoMdCart className="text-3xl text-[#FD8B8B]" />
        </div>

        <div className="flex flex-col justify-start">
          <p className="text-md">
            <span className=" font-semibold">Manage your products &nbsp;</span>
            and keep track of your store's performance
          </p>
        </div>

        <div className="size-16 ml-5">
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
