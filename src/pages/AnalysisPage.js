import AIDetectorResult from "../components/AiDetectorResult";
import AnalysisModeSwitch from "../components/AnalysisModeSwitch";
import TextAnalysisInterface from "../components/TextAnalsyisInterface";
import FileAnalysisInterface from "../components/FileAnalysisInterface";
import NavBar from "../components/NavBar";
import Waves from "../components/Waves";
import { useState } from "react";

function AnalysisPage() {
    const [mode, setMode] = useState("text");

    const handleModeSwitch = (newMode) => {
        setMode(newMode);
    }

    return (
        <div className="bg-brand-white">

            <NavBar/>

            <section name="analysis" className="relative overflow-hidden">
                <Waves/>

                <div className="relative z-10 h-[calc(100vh-5rem)] flex justify-center items-center">

                    <div className="w-[85%] h-[80vh] bg-white rounded-2xl shadow-lg">

                        <div className="w-full grid grid-cols-10">

                            <div className="col-span-7 w-full h-full">

                                <div className="m-[36px]">

                                    <p className="text-brand-indigo-400 font-outfit text-[42px] font-medium mb-2">Analyze Text</p>

                                    <AnalysisModeSwitch onSwitch={handleModeSwitch}/>

                                    { (mode === "text") && <TextAnalysisInterface/>}

                                    { (mode === "file") && <FileAnalysisInterface/>}
                                
                                </div>    

                            </div>


                            <div className="col-span-3 w-full h-[80vh] border-l-2 border-[rgba(75, 84, 97, 53)]">

                                <div className="mx-8 mt-[52px]">

                                    <p className="font-outfit text-brand-indigo-400 text-2xl font-medium mb-4">Scan Results</p>

                                    <div className="w-full flex mb-6">

                                        <AIDetectorResult label="Human" progress={85}/>

                                        <br className="mr-5"/>

                                        <AIDetectorResult label="AI" progress={15}/>

                                    </div>

                                    <p className="font-outfit text-brand-indigo-400 text-2xl font-medium">Interpretation</p>

                                    <p className="font-outfit text-brand-indigo-200 text-lg mt-2 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                                    <p className="font-outfit text-brand-indigo-400 text-2xl font-medium">Classification</p>

                                    <p className="font-outfit text-brand-indigo-200 text-lg mt-2 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

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