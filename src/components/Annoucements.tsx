import React from "react";

export default function Annoucements() {
  return (
    <div className="bg-white p-4 rounded-md">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Annoucements</h1>
        <span className="text-xs text-gray-400">View All</span>
      </div>

      <div className="flex flex-col gap-4">
        <div className="bg-lemonSkyLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2>Lorem ipsum dolor sit amet</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md p-1">
              2025-03-01
            </span>
          </div>

          <p className="text-sm text-gray-400 mt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
            aliquid.
          </p>
        </div>

        <div className="bg-lemonPurpleLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2>Lorem ipsum dolor sit amet</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md p-1">
              2025-03-01
            </span>
          </div>

          <p className="text-sm text-gray-400 mt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
            aliquid.
          </p>
        </div>

        <div className="bg-lemonYellowLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2>Lorem ipsum dolor sit amet</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md p-1">
              2025-03-01
            </span>
          </div>

          <p className="text-sm text-gray-400 mt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
            aliquid.
          </p>
        </div>
      </div>
    </div>
  );
}
