// "use client"
import { File, Loader2, Upload } from "lucide-react";
import Image from "next/image";
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

function Dropzone({ sendFile, uploading }) {
  const onDrop = useCallback((acceptedFiles) => {
    sendFile(acceptedFiles[0]);
  }, [])
  ;

  // 
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
      className="w-full h-full flex justify-center rounded-xl items-center"
      {...getRootProps()}
    >
      <input {...getInputProps()} />

      <div className="w-full h-full bg-[#BCCCDC] backdrop-blur-sm rounded-xl flex flex-col gap-6 justify-center items-center px-8">
        {/* Upload Icon with Animation */}
        <div
          className={`relative transition-all duration-300 ${
            isDragActive ? "scale-110" : "scale-100"
          }`}
        >
          <div
            className={`absolute inset-0 bg-black rounded-full blur-xl opacity-20 ${
              isDragActive ? "animate-pulse" : ""
            }`}
          ></div>
          <div
            className={`relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-full p-8 border-2 transition-all duration-300 ${
              isDragActive ? "border-black border-dashed" : "border-gray-300"
            }`}
          >
            {uploading ? (
              <Loader2 className="w-16 h-16 text-black animate-spin" />
            ) : (
              <Upload
                className={`w-16 h-16 transition-colors duration-300 ${
                  isDragActive ? "text-black" : "text-gray-600"
                }`}
              />
            )}
          </div>
        </div>

        {/* Text Content */}
        <div className="w-full max-w-md text-center space-y-3">
          <h3 className="text-2xl font-semibold text-gray-900">
            {uploading
              ? "Uploading Files..."
              : isDragActive
              ? "Drop Files Here"
              : "Upload Log Files"}
          </h3>

          {!uploading && (
            <>
              <p className="text-base text-gray-600 leading-relaxed">
                {isDragActive ? (
                  "Release to upload your files"
                ) : (
                  <>
                    Drag and drop your log files here
                    <span className="block text-sm text-gray-500 mt-1">
                      or click to browse from your device
                    </span>
                  </>
                )}
              </p>

              {/* File Types Indicator */}
              {!isDragActive && (
                <div className="flex items-center justify-center gap-2 pt-2">
                  <File className="w-4 h-4 text-gray-400" />
                  <span className="text-xs text-gray-500 font-medium">
                    Supported formats: .log, .txt
                  </span>
                </div>
              )}
            </>
          )}

          {/* Upload Progress Indicator */}
          {uploading && (
            <div className="w-full bg-gray-200 rounded-full h-1.5 mt-4 overflow-hidden">
              <div
                className="bg-black h-full rounded-full animate-pulse"
                style={{ width: "60%" }}
              ></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dropzone;
