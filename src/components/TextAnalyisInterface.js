import { useState } from "react";
import { analyzeContent } from "../api/gemini";


function TextAnalysisInterface({ onAnalyze, setIsLoading }) {
  const [body, setBody] = useState("");
  const [isLoading, setLocalLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleAnalyze = async () => {
    setError(null);
    setLocalLoading(true);
    if (setIsLoading) setIsLoading(true);
    try {
      const json = await analyzeContent(body);
      if (onAnalyze) onAnalyze(json);
    } catch (error) {
      setError("Failed to analyze text.");
      console.error("Error analyzing text:", error);
    } finally {
      setLocalLoading(false);
      if (setIsLoading) setIsLoading(false);
    }
  };

  return (
    <div>
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        className="w-full h-[45vh] bg-brand-white rounded-lg mt-8 p-5 font-outfit text-brand-indigo-300 text-lg outline-none resize-none mb-5"
        placeholder="Insert text to be analyzed here..."
      ></textarea>

      <div className="w-full flex justify-end items-center gap-4">
        {error && <p className="text-sm text-red-500">{error}</p>}
        <input
          type="button"
          value={isLoading ? "Analyzing..." : "Analyze"}
          disabled={body.length === 0 || isLoading}
          onClick={handleAnalyze}
          className={`rounded-xl px-6 py-2 font-outfit text-[22px] font-semibold cursor-pointer transition ${
            body.length > 0 && !isLoading
              ? "bg-brand-indigo-300 text-white hover:bg-brand-indigo-400"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        />
      </div>
    </div>
  );
}

export default TextAnalysisInterface;
