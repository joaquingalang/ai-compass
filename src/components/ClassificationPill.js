import React from "react";

export default function ClassificationPill({ classification }) {
  if (!classification) return null;

  // Normalize for matching
  const key = classification.toLowerCase();

  const styles = {
    "extreme dependence": { bg: "bg-red-100", text: "text-red-700", ring: "ring-red-200" },
    "high dependence": { bg: "bg-orange-100", text: "text-orange-700", ring: "ring-orange-200" },
    "moderate dependence": { bg: "bg-yellow-100", text: "text-yellow-700", ring: "ring-yellow-200" },
    "low dependence": { bg: "bg-green-100", text: "text-green-700", ring: "ring-green-200" },
    "negligible dependence": { bg: "bg-slate-100", text: "text-slate-700", ring: "ring-slate-200" },
  };

  const chosen = styles[key] || { bg: "bg-gray-100", text: "text-gray-700", ring: "ring-gray-200" };

  return (
    <span
      className={`font-outfit inline-flex items-center gap-2 ${chosen.bg} ${chosen.text} px-3 py-1 rounded-full text-sm font-medium ring-1 ${chosen.ring}`}
      aria-label={`Classification: ${classification}`}
    >
      {classification}
    </span>
  );
}
