import { useState } from "react";

function AnalysisModeSwitch() {

    const [selected, setSelected] = useState("text");

    const activeSwitch = "bg-brand-turqoise-200 rounded-xl flex justify-center items-center cursor-pointer";
    const activeText = "font-outfit text-white text-xl font-semibold";
    const inactiveSwitch = "bg-transparent rounded-xl flex justify-center items-center cursor-pointer";
    const inactiveText = "font-outfit text-brand-turqoise-400 text-xl font-semibold"

    function onTileClick(tile) {
        if (tile === "text") {
            setSelected("text");
        } else {
            setSelected("file");
        }
    }

    return (
        <div className="w-[365px] h-[47px] bg-[#9AF6E5] rounded-xl grid grid-cols-2">

            <div onClick={() => onTileClick("text")} className={(selected === "text") ? activeSwitch : inactiveSwitch}>

                <p className={(selected === "text") ? activeText : inactiveText}>Paste Text</p>

            </div>

            <div onClick={() => onTileClick("file")} className={(selected === "file") ? activeSwitch : inactiveSwitch}>

                <p className={(selected === "file") ? activeText : inactiveText}>Upload File</p>

            </div>

        </div>
    );
}

export default AnalysisModeSwitch;