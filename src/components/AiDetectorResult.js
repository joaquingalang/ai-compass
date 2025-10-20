import React from "react";

export default function AIDetectorResult({ progress, label, size = "md" }) {
  // Size presets
  const sizes = {
    sm: { radius: 50, font: "text-xl", label: "text-xs", container: "w-28 h-28" },
    md: { radius: 70, font: "text-[32px]", label: "text-sm", container: "w-40 h-40" },
    lg: { radius: 90, font: "text-[40px]", label: "text-base", container: "w-52 h-52" },
  };

  const { radius, font, label: labelSize, container } = sizes[size];
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;
  // Green for high (>=50), red for low (<50)
  const color = progress >= 50 ? "#22c55e" : "#ef4444";

  return (
    <div className={`relative ${container} flex items-center justify-center`}>
      <svg className="w-full h-full transform -rotate-90">
        {/* Track */}
        <circle
          stroke="#e5e7eb"
          fill="transparent"
          strokeWidth="16"
          r={radius}
          cx="80"
          cy="80"
        />
        {/* Progress */}
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
          style={{ transition: "stroke-dashoffset 0.5s ease" }}
        />
      </svg>

      {/* Text Content */}
      <div className="absolute flex flex-col items-center justify-center">
        <span className={`absolute -top-6 font-outfit ${labelSize} text-brand-indigo-200`}>
          {label}
        </span>
        <span className={`absolute -top-3 font-outfit ${font} text-gray-800`}>
          {progress}
          <span className="relative bottom-[3.5px] ml-1 text-xl">%</span>
        </span>
      </div>
    </div>
  );
}
