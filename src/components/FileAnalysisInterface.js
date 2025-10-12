import { useState } from "react";
import FileIcon from "../assets/file_icon.svg";
import CloseIcon from "../assets/rounded_close_icon.svg";

function FileAnalysisInterface() {
  const [files, setFiles] = useState([]);
  const [isDragging, setIsDragging] = useState(false);

  const handleDrop = (event) => {
    event.preventDefault();
    setIsDragging(false);

    const droppedFiles = Array.from(event.dataTransfer.files);
    if (droppedFiles.length > 0) {
      setFiles((prevFiles) => {
        // Optional: filter out duplicates by file name
        const newFiles = droppedFiles.filter(
          (f) => !prevFiles.some((pf) => pf.name === f.name)
        );
        return [...prevFiles, ...newFiles];
      });
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    if (selectedFiles.length > 0) {
      setFiles((prevFiles) => {
        const newFiles = selectedFiles.filter(
          (f) => !prevFiles.some((pf) => pf.name === f.name)
        );
        return [...prevFiles, ...newFiles];
      });
    }
  };

  const handleRemoveFile = (index) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  }

  const formatFileName = (fileName) => {
    if (fileName.length > 16) {
        return fileName.slice(0, 15) + "...";
    } else {
        return fileName;
    }
  }

  return (


    <div>
        {/* File Preview */}

        {files.length > 0 && (
            <div className="w-full h-[258px] grid grid-cols-4 gap-5 mt-5 overflow-y-auto">
                {files.map((file, index) => {
                    const fileSizeKB = (file.size / 1024).toFixed(2);
                    return <div key={index} className="relative bg-brand-white rounded-lg h-[163px]">

                        <div className="absolute top-3 right-3">
                            <img onClick={() => handleRemoveFile(index)} src={CloseIcon} className="w-[28px] cursor-pointer"/>
                        </div>

                        <div className="h-[132px] flex justify-center items-center">
                            <img src={FileIcon}/>
                        </div>

                        <hr className="border-white border-b-2"/>

                        <div className="h-[29px] flex justify-between items-center mx-3">

                            <p className="font-outfit text-sm text-brand-indigo-200">{formatFileName(file.name)}</p>

                            <p className="font-outfit text-sm text-brand-indigo-200 opacity-50">{fileSizeKB} KB</p>

                        </div>
                        
                    </div>
                })}
            </div>
        )}

        {/* Full Drop Zone */}
        {files.length <= 0 && (
            <div
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                className={`relative w-full h-[45vh] rounded-lg mt-8 mb-5 border-[3px] border-dashed flex justify-center items-center transition-colors ${
                isDragging
                    ? "border-brand-indigo-400 bg-brand-indigo-50"
                    : "border-brand-indigo-300 bg-brand-white"
                }`}
            >
                <p className="font-outfit text-brand-indigo-300 text-4xl font-medium z-10">
                Drop Files Here
                </p>

                {/* Hidden clickable input */}
                <input
                type="file"
                multiple
                onChange={handleFileChange}
                className="absolute inset-0 opacity-0 cursor-pointer z-20"
                />
            </div>
        )}

        {/* Half Drop Zone */}
        {files.length > 0 && (
            <div
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                className={`relative w-full h-[20vh] rounded-lg mt-8 mb-5 border-[3px] border-dashed flex justify-center items-center transition-colors ${
                isDragging
                    ? "border-brand-indigo-400 bg-brand-indigo-50"
                    : "border-brand-indigo-300 bg-brand-white"
                }`}
            >
                <p className="font-outfit text-brand-indigo-300 text-[28px] font-medium z-10">
                Drop Files Here
                </p>

                {/* Hidden clickable input */}
                <input
                type="file"
                multiple
                onChange={handleFileChange}
                className="absolute inset-0 opacity-0 cursor-pointer z-20"
                />
            </div>
        )}
        

        {/* Submit Button */}
        <div className="w-full flex justify-end">
            <input
            type="submit"
            value="Analyze"
            disabled={files.length === 0}
            className={`rounded-xl px-6 py-2 font-outfit text-[22px] font-semibold cursor-pointer transition ${
                files.length > 0
                ? "bg-brand-indigo-300 text-white hover:bg-brand-indigo-400"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
            />
        </div>
    </div>
  );
}

export default FileAnalysisInterface;
