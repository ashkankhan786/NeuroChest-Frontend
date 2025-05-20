import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { useLocation } from "react-router";
import Footer from "../components/Footer";

function Result() {
  const location = useLocation();
  const { prediction, image } = location.state || {};

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
      <h1 className="text-4xl font-bold text-center text-green-300 mt-28">
        Result
      </h1>

      <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 mt-10 px-4 mb-16">
        {/* Image */}
        <div className="w-full max-w-sm">
          <img
            src={image}
            alt="Uploaded X-ray"
            className="w-full rounded-xl shadow-lg"
          />
        </div>

        {/* Predictions */}
        <div className="text-center w-full max-w-lg">
          <p className="text-gray-200 text-lg leading-relaxed mb-4">
            Your X-ray has been analyzed. The results are as follows:
          </p>
          <ul className="space-y-3 text-green-100">
            {Object.entries(prediction).map(([disease, prob]) => (
              <li key={disease} className="text-white">
                {disease}: {(prob * 100).toFixed(2)}%
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Result;
