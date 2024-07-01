"use client";

import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { IoMdArrowDropup } from "react-icons/io";
import SpringModalButton from "./SpringModal";

ChartJS.register(PointElement, LineElement, Legend, CategoryScale, LinearScale);

const SalesFigures = () => {
  const dataSkyRocket = {
    datasets: [
      {
        label: "Rocket Sales",
        data: [25, 30, 20, 40, 35, 70, 80],
        pointRadius: 0,
        tension: 0.2,
        borderWidth: 7,
        borderColor: "#9BE931",
      },
    ],
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  };
  return (
    <div className="p-5 bg-white h-full w-[40%] rounded-xl">
      {/* Title */}
      <h2 className="text-2xl font-semibold mb-5 text-center">
        Skyrocket your sales
      </h2>

      {/* Content Bag */}
      <div className="flex flex-col justify-between items-center">
        <div className="flex justify-center items-center gap-3">
          <div className="p-4 bg-[#e3e7ff] rounded-full flex justify-center items-center">
            <BsFillRocketTakeoffFill className="text-3xl text-[#3d53d2]" />
          </div>

          <div className="flex flex-col justify-start">
            <p className="text-md">
              <span className="font-semibold">Reach your goals &nbsp;</span>
              with the help of our platform
            </p>
          </div>

          <div className="flex flex-row justify-center items-center">
            <h2 className="text-2xl font-bold">$27k</h2>
            <IoMdArrowDropup className="text-3xl text-[#78D23D]" />
          </div>
        </div>

        <div className="size-full flex justify-between items-center px-5 gap-10">
          <div className="h-[6rem]">
            <Line
              data={dataSkyRocket}
              options={{
                plugins: {
                  legend: {
                    display: false,
                  },
                },
                scales: {
                  x: {
                    display: false,
                    grid: {
                      display: false,
                    },
                  },
                  y: {
                    display: false,
                    grid: {
                      display: false,
                    },
                  },
                },
              }}
            />
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <h4 className="text-sm ml-2 text-center">Fantastic right ?</h4>
            <SpringModalButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesFigures;
