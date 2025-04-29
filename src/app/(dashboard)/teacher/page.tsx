"use client";

import Annoucements from "@/components/Annoucements";
import BigCalendar from "@/components/BigCalender";
import React from "react";

import "react-big-calendar/lib/css/react-big-calendar.css";

export default function TeacherPage() {
  return (
    <div className="p-4 flex flex-1 gap-4 flex-col xl:flex-row">
      {/* Left */}
      <div className="w-full xl:w-2/3">
        <div className="h-full bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold">Schedule</h1>
          <BigCalendar />
        </div>
      </div>
      {/* Right */}
      <div className="w-full xl:w-1/3 flex flex-col gap-8">
        <Annoucements />
      </div>
    </div>
  );
}
