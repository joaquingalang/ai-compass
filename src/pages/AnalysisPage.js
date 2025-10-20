import { useState } from "react";
import AIDetectorResult from "../components/AiDetectorResult";
import AnalysisModeSwitch from "../components/AnalysisModeSwitch";
import TextAnalysisInterface from "../components/TextAnalyisInterface";
import FileAnalysisInterface from "../components/FileAnalysisInterface";
import NavBar from "../components/NavBar";
import Waves from "../components/Waves"; // <-- Add this import
import ClassificationPill from "../components/ClassificationPill";

function AnalysisPage() {
  const [mode, setMode] = useState("text");
  const [humanPercentage, setHumanPercentage] = useState(0);
  const [aiPercentage, setAiPercentage] = useState(0);
  const [interpretation, setInterpretation] = useState("— No interpretation yet —");
  const [classification, setClassification] = useState("");
  const [message, setMessage] = useState("— No classification yet —");
  const [isLoading, setIsLoading] = useState(false);

  const handleModeSwitch = (newMode) => {
    setMode(newMode);
  };

  const handleAnalysis = (results) => {
    setIsLoading(false);
    setHumanPercentage(results.human_percentage);
    setAiPercentage(results.ai_percentage);
    setInterpretation(results.interpretation)
    setClassification(results.classification);
    setMessage(results.message);
  }

  return (
    <div className="bg-brand-white">
      <NavBar />

      <section id="analysis" className="relative overflow-hidden mt-20">
        <Waves />

        <div className="relative z-10 h-auto lg:h-[calc(100vh-5rem)] flex justify-center items-center px-4 sm:px-6">
          <div className="w-full lg:w-[85%] h-auto lg:h-[80vh] bg-white rounded-2xl shadow-lg p-4 lg:p-0 my-10">
            {/* Responsive Grid */}
            <div className="w-full grid grid-cols-1 lg:grid-cols-10">
              {/* LEFT SIDE */}
              <div className="col-span-1 lg:col-span-7 w-full h-full mb-5">
                <div className="m-0 lg:m-[36px]">
                  <p className="text-brand-indigo-400 font-outfit text-3xl lg:text-[42px] font-medium mb-5 text-center lg:text-start">
                    Analyze Text
                  </p>

                  <div className="flex justify-center lg:justify-start mb-4">
                    <AnalysisModeSwitch onSwitch={handleModeSwitch} />
                  </div>

                  {mode === "text" && <TextAnalysisInterface onAnalyze={handleAnalysis} setIsLoading={setIsLoading} />}
                  {mode === "file" && <FileAnalysisInterface onAnalyze={handleAnalysis} setIsLoading={setIsLoading} />}
                </div>
              </div>

              {/* RIGHT SIDE */}
              <div className="col-span-1 lg:col-span-3 w-full h-auto lg:h-[80vh] border-t-2 lg:border-t-0 lg:border-l-2 border-[rgba(75,84,97,0.53)]">
                <div className="mx-4 mt-6 lg:mx-8 lg:mt-[52px]">
                  <p className="font-outfit text-brand-indigo-400 text-xl lg:text-2xl font-medium mb-4">
                    Scan Results
                  </p>

                  {isLoading ? (
                    <div className="w-full h-[40vh] flex items-center justify-center">
                      <div className="flex flex-col items-center justify-center">
                        <svg className="animate-spin h-16 w-16 text-brand-indigo-300" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                        </svg>
                        <span className="mt-4 text-brand-indigo-300 font-outfit text-lg">Analyzing...</span>
                      </div>
                    </div>
                  ) : (
                    <>
                      {/* Circle Results */}
                      <div className="w-full flex flex-col sm:flex-row lg:flex-row items-center justify-center gap-6 mb-6">
                        <AIDetectorResult label="Human" progress={humanPercentage} size="md" />
                        <AIDetectorResult label="AI" progress={aiPercentage} size="md" />
                      </div>

                      {/* Text Info */}
                      <p className="font-outfit text-brand-indigo-400 text-xl lg:text-2xl font-medium">
                        Interpretation
                      </p>
                      <p className="font-outfit text-brand-indigo-200 text-base lg:text-lg mt-2 mb-6">
                        {interpretation}
                      </p>

                      <div className="flex items-center justify-between">
                        <p className="font-outfit text-brand-indigo-400 text-xl lg:text-2xl font-medium">
                          Classification
                        </p>
                        <ClassificationPill classification={classification} />
                      </div>
                      <p className="font-outfit text-brand-indigo-200 text-base lg:text-lg mt-2 mb-6">
                        {message}
                      </p>
                    </>
                  )}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AnalysisPage;