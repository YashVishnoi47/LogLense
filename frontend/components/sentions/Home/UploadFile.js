"use client";
import React, { useEffect, useState } from "react";
import Dropzone from "@/components/layout/DropeZone";
import { getCookie, SetCookie } from "@/utils/Cookies";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const UploadFile = () => {
  const router = useRouter();
  const [result, setResult] = useState();
  const [uploading, setUploading] = useState(false);
  const url = "https://loglense-backend.onrender.com/api/logs/upload"
  // const url = "http://localhost:5000/api/logs/upload";
  const sendFile = async (e) => {
    try {
      const formData = new FormData();
      formData.append("file", e);

      setUploading(true);

      const res = await fetch(`${url}`, {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        toast.error("Internal Server Error", {
          duration: 3000,
        });
      }

      console.log("response: ", res);

      const data = await res.json();
      console.log("data: ", data);
      setResult(data.text);

      if (data.text) {
        router.push("/dashboard");
      } else {
        toast.error(result.message || "Something went wrong", {
          duration: 3000,
        });
      }

      SetCookie("Data Analyises", JSON.stringify(data.text));

      setUploading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const showPopUp = () => {
      if (result?.success === false) {
        toast.error(result.message || "Something went wrong", {
          duration: 3000,
        });
      }
    };

    showPopUp();
  }, [result]);

  return (
    <section className="w-full max-w-[1520px] relative z-1 mt-25 h-[700px] flex justify-center items-start">
      {/* <input className="border " type="file" onChange={sendFile} /> */}
      {/* <button onClick={() => get()}>Click</button> */}

      <div
        id="upload"
        className="w-[85%] h-[600px] max-h-[600px] flex justify-center cursor-pointer items-center rounded-xl transition-all duration-300 ease-in-out shadow-2xl shadow-[#BCCCDC]"
      >
        <Dropzone uploading={uploading} sendFile={sendFile} />
      </div>
    </section>
  );
};

export default UploadFile;
