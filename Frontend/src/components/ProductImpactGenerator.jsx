import React, { useEffect, useState } from "react";
import axios from "axios";

const ImpactGenerator = () => {
  const [product_name, setProductName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [impactResult, setImpactResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState();

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  const generateImpact = async () => {
    try {
      setLoading(true);
      console.log("token is=", token);

      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/ai/products/generate-impact`,
        {
          product_name,
          quantity,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      console.log("res=", response.data.data);
      setImpactResult(response?.data?.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-50 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-xl">
        <h2 className="text-2xl font-bold text-purple-700 mb-6 text-center">
          AI Sustainability Impact Generator
        </h2>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Product Name"
            value={product_name}
            onChange={(e) => setProductName(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <input
            type="number"
            placeholder="Quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <button
            onClick={generateImpact}
            disabled={loading}
            className="w-full bg-purple-600 text-white font-semibold py-2 rounded-lg hover:bg-purple-700 transition duration-200 disabled:bg-gray-400"
          >
            {loading ? "Generating..." : "Generate Impact"}
          </button>
        </div>

        {impactResult && (
          <div className="mt-8 bg-purple-50 p-4 rounded-xl border border-purple-200">
            <h3 className="text-lg font-semibold text-purple-700 mb-3">
              Impact Result
            </h3>

            <p className="text-gray-700">
              <span className="font-semibold">Plastic Saved:</span>{" "}
              {impactResult.plastic_saved}
            </p>

            <p className="text-gray-700 mt-2">
              <span className="font-semibold">Carbon Avoided:</span>{" "}
              {impactResult.carbon_avoided}
            </p>

            <p className="text-gray-700 mt-2">
              <span className="font-semibold">Impact Statement:</span>{" "}
              {impactResult.impact_statement}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImpactGenerator;
