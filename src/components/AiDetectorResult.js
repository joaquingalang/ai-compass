import React from "react";

export default function AIDetectorResult({ progress, label }) {
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;
  const color = label === "Human" ? "#22c55e" : "#ef4444"; // Tailwind green/red

  return (
    <div className="relative w-40 h-40 flex items-center justify-center">
      <svg className="w-full h-full transform -rotate-90">
        {/* Background circle (track) */}
        <circle
          stroke="#e5e7eb" // Tailwind gray-200
          fill="transparent"
          strokeWidth="16"
          r={radius}
          cx="80"
          cy="80"
        />
        {/* Progress circle */}
        <circle
          stroke={color}
          fill="transparent"
          strokeWidth="16"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          r={radius}
          cx="80"
          cy="80"
          style={{
            transition: "stroke-dashoffset 0.5s ease",
          }}
        />
      </svg>

      {/* Inner content (label + percentage) */}
      <div className="absolute flex flex-col items-center justify-center">
        <span className="absolute -top-6 font-outfit text-sm text-brand-indigo-200">
          {label}
        </span>
        <span className="absolute -top-3 font-outfit text-[32px] text-gray-800">
          {progress}
          <span className="relative bottom-[3.5px] ml-1 text-xl">%</span>
        </span>
      </div>
    </div>
  );
}
