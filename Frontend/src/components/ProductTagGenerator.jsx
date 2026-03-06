import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductTagGenerator = () => {
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [aiResult, setAiResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState(null);

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  const generateTags = async () => {
    try {
      setLoading(true);

      console.log("token fro generate tag=", token);
      const response = await axios.post(
        "http://localhost:8000/api/ai/products/generate-tags",
        {
          productName,
          description,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      setAiResult(response?.data?.data);
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
          AI Product Category & Tag Generator
        </h2>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Product Name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <textarea
            placeholder="Product Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="5"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <button
            onClick={generateTags}
            disabled={loading}
            className="w-full bg-purple-600 text-white font-semibold py-2 rounded-lg hover:bg-purple-700 transition duration-200 disabled:bg-gray-400"
          >
            {loading ? "Generating..." : "Generate AI Tags"}
          </button>
        </div>

        {aiResult && (
          <div className="mt-8 bg-purple-50 p-4 rounded-xl border border-purple-200">
            <h3 className="text-lg font-semibold text-purple-700 mb-3">
              AI Result
            </h3>

            <p className="text-gray-700">
              <span className="font-semibold">Primary Category:</span>{" "}
              {aiResult.category}
            </p>

            <p className="text-gray-700 mt-2">
              <span className="font-semibold">Sub Category:</span>{" "}
              {aiResult.sub_category}
            </p>

            <p className="text-gray-700 mt-2">
              <span className="font-semibold">SEO Tags:</span>{" "}
              {aiResult.tags?.join(", ")}
            </p>

            <p className="text-gray-700 mt-2">
              <span className="font-semibold">Sustainability Filters:</span>{" "}
              {aiResult.sustainability_filters?.join(", ")}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductTagGenerator;
