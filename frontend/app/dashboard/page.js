"use client";
import Navbar from "@/components/layout/Navbar";
import { getCookie } from "@/utils/Cookies";
import React, { useEffect, useState } from "react";
import { BiError } from "react-icons/bi";
import { LuLogs } from "react-icons/lu";
import { PiWarningCircle } from "react-icons/pi";
import { FaChalkboardUser } from "react-icons/fa6";
import { MdOutlineSecurity } from "react-icons/md";
import { FaRegLightbulb } from "react-icons/fa";
import { TbSum } from "react-icons/tb";

const Dashboard = () => {
  const [result, setResult] = useState();

  useEffect(() => {
    const getC = async () => {
      const Data = getCookie("Data Analyises");
      const finalData = await JSON.parse(Data);
      console.log("finalData: ", finalData);
      setResult(finalData);
    };

    getC();
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-[#F8FAFC] flex flex-col justify-start items-center">
      <Navbar />

      <div className="w-full h-fit py-5 px-5 mt-5 gap-6 flex flex-col justify-center items-center">
        {/* Heading */}
        <div className="w-[86%] relative h-[150px] border border-black/30 flex flex-col rounded-xl justify-center items-center">
          <h1 className="text-6xl leading-tight tracking-tighter w-[50%] font-medium text-center">
            Dashboard
          </h1>
          <p className="text-md w-[40%] text-center font-mono">
            Monitor the final Analyises
          </p>
        </div>

        {/* First Lane */}
        <div className="w-full border-black h-[200px] flex gap-6 justify-center items-center">
          <div className="w-[300px] rounded-xl h-full flex flex-col justify-between p-6 border border-gray-200 shadow-sm bg-white">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-red-50">
                <BiError size={24} className="text-red-600" />
              </div>
              <p className="text-sm font-medium text-gray-600 uppercase tracking-wide">
                Errors
              </p>
            </div>
            <p className="text-5xl font-bold text-gray-900">
              {result?.counts.errors}
            </p>
          </div>

          <div className="w-[300px] rounded-xl h-full flex flex-col justify-between p-6 border border-gray-200 shadow-sm bg-white">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-blue-50">
                <LuLogs size={24} className="text-blue-600" />
              </div>
              <p className="text-sm font-medium text-gray-600 uppercase tracking-wide">
                Total Logs
              </p>
            </div>
            <p className="text-5xl font-bold text-gray-900">
              {result?.counts.totalLogs}
            </p>
          </div>

          <div className="w-[300px] rounded-xl h-full flex flex-col justify-between p-6 border border-gray-200 shadow-sm bg-white">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-orange-50">
                <PiWarningCircle size={24} className="text-orange-600" />
              </div>
              <p className="text-sm font-medium text-gray-600 uppercase tracking-wide">
                Warnings
              </p>
            </div>
            <p className="text-5xl font-bold text-gray-900">
              {result?.counts.warnings}
            </p>
          </div>

          <div className="w-[300px] rounded-xl h-full flex flex-col justify-between p-6 border border-gray-200 shadow-sm bg-white">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-orange-50">
                <PiWarningCircle size={24} className="text-orange-600" />
              </div>
              <p className="text-sm font-medium text-gray-600 uppercase tracking-wide">
                slow Processes
              </p>
            </div>
            <p className="text-5xl font-bold text-gray-900">
              {result?.slowProcesses.length}
            </p>
          </div>
        </div>

        {/* Second Lane */}
        <div className="w-[86%] h-[300px] flex gap-6 justify-center items-center">
          <div className="w-[65%] rounded-xl overflow-y-scroll h-full p-6 border border-gray-200 shadow-sm bg-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-green-50">
                <FaChalkboardUser size={24} className="text-green-600" />
              </div>
              <p className="text-sm font-medium text-gray-600 uppercase tracking-wide">
                User Actions
              </p>
            </div>

            <div className="space-y-2 ">
              {result?.userActions.map((item, idx) => {
                return (
                  <div
                    key={idx}
                    className="flex gap-3 px-4 py-3 rounded-lg bg-gray-50 border border-gray-100"
                  >
                    <span className="text-sm font-semibold text-gray-400 min-w-[24px]">
                      {idx + 1}.
                    </span>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {item}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="w-[35%] rounded-xl h-full p-6 border border-gray-200 shadow-sm bg-white">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-green-50">
                <FaChalkboardUser size={24} className="text-green-600" />
              </div>
              <p className="text-sm font-medium text-gray-600 uppercase tracking-wide">
                Coming Soon
              </p>
            </div>
          </div>
        </div>

        {/* Third Lane */}
        <div className="w-[86%] h-[500px] flex gap-6 justify-center items-center">
          <div className="w-[50%] rounded-xl h-full overflow-y-scroll  p-6 border border-gray-200 shadow-sm bg-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-green-50">
                <MdOutlineSecurity size={24} className="text-green-600" />
              </div>
              <p className="text-sm font-medium text-gray-600 uppercase tracking-wide">
                security Findings
              </p>
            </div>

            <div className="space-y-2">
              {result?.securityFindings.map((item, idx) => {
                return (
                  <div
                    key={idx}
                    className="flex gap-3 px-4 py-3 rounded-lg bg-gray-50 border border-gray-100"
                  >
                    <span className="text-sm font-semibold text-gray-400 min-w-[24px]">
                      {idx + 1}.
                    </span>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {item}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="w-[50%] rounded-xl overflow-y-scroll h-full  p-6 border border-gray-200 shadow-sm bg-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-yellow-50">
                <FaRegLightbulb size={24} className="text-yellow-600" />
              </div>
              <p className="text-sm font-medium text-gray-600 uppercase tracking-wide">
                Suggestions
              </p>
            </div>

            <div className="space-y-2">
              {result?.suggestions.map((item, idx) => {
                return (
                  <div
                    key={idx}
                    className="flex gap-3 px-4 py-3 rounded-lg bg-gray-50 border border-gray-100"
                  >
                    <span className="text-sm font-semibold text-gray-400 min-w-[24px]">
                      {idx + 1}.
                    </span>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {item}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/*Summary */}
        <div className="w-[86%] h-[300px] flex gap-6 justify-center items-center">
          <div className="w-[100%] rounded-xl h-full  p-6 border border-gray-200 shadow-sm bg-white">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-yellow-50">
                <TbSum size={24} className="text-yellow-600" />
              </div>
              <p className="text-sm font-medium text-gray-600 uppercase tracking-wide">
                Summary
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex gap-3 px-4 py-3 rounded-lg bg-gray-50 border border-gray-100">
                <span className="text-sm font-semibold text-gray-400 min-w-[24px]">
                  1.
                </span>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {result?.summary}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
