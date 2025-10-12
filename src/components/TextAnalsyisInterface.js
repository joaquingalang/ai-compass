import { useState } from "react";

function TextAnalysisInterface() {

    const [body, setBody] = useState("");

    return (
        <div>
            <textarea value={body} onChange={(e) => setBody(e.target.value)} className="w-full h-[45vh] bg-brand-white rounded-lg mt-8 p-5 font-outfit text-brand-indigo-300 text-lg outline-none resize-none mb-5" placeholder="Insert text to be analyzed here..."></textarea>

            {/* Submit Button */}
            <div className="w-full flex justify-end">
                <input
                type="submit"
                value="Analyze"
                disabled={body.length === 0}
                className={`rounded-xl px-6 py-2 font-outfit text-[22px] font-semibold cursor-pointer transition ${
                    body.length > 0
                    ? "bg-brand-indigo-300 text-white hover:bg-brand-indigo-400"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
                />
            </div>
        </div>
    );
}

export default TextAnalysisInterface;