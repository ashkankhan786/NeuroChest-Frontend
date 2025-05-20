import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { useLocation } from "react-router";

function Result() {
  const location = useLocation();
  const prediction = location.state?.prediction;
  useEffect(() => {
    console.log("From result component", prediction);
  }, [prediction]);
  const LABELS = [
    "No Finding",
    "Enlarged Cardiomediastinum",
    "Cardiomegaly",
    "Lung Opacity",
    "Lung Lesion",
    "Edema",
    "Consolidation",
    "Pneumonia",
    "Atelectasis",
    "Pneumothorax",
    "Pleural Effusion",
    "Pleural Other",
    "Fracture",
    "Support Devices",
  ];
  return (
    <div className="w-full h-full flex flex-col gap-4">
      <Navbar />
      <div>
        <h1 className="text-4xl font-bold text-center text-green-300 mt-28">
          Result
        </h1>
        <div className="flex justify-center mt-10">
          <img
            src="/images/result.png"
            alt="Result"
            className="w-full max-w-sm rounded-xl shadow-lg"
          />
        </div>
        <div className="text-center mt-6">
          <p className="text-gray-200 text-lg leading-relaxed">
            Your X-ray has been analyzed. The results are as follows:
          </p>
          <ul className="mt-6 space-y-3 text-green-100 list-disc list-inside">
            {Object.entries(prediction).map(([disease, prob]) => (
              <p key={disease} className="text-white">
                {disease}: {(prob * 100).toFixed(2)}%
              </p>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Result;
