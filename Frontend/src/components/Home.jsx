const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-purple-700 mb-4">
        EcoCommerce AI
      </h1>

      <p className="text-gray-600 text-center max-w-xl mb-10">
        An AI-powered tool that helps e-commerce platforms generate product
        categories, SEO tags, and sustainability insights automatically from
        product details.
      </p>

      {/* Modules */}
      <div className="grid md:grid-cols-2 gap-6 max-w-3xl w-full">
        {/* Module 1 */}
        <div className="bg-white shadow-md rounded-xl p-6 border">
          <h2 className="text-xl font-semibold text-purple-600 mb-2">
            Product Tag Generator
          </h2>
          <p className="text-gray-600 text-sm">
            Enter product name and description to generate AI-based category,
            sub-category, SEO tags, and sustainability filters.
          </p>
        </div>

        {/* Module 2 */}
        <div className="bg-white shadow-md rounded-xl p-6 border">
          <h2 className="text-xl font-semibold text-purple-600 mb-2">
            Sustainability Impact Generator
          </h2>
          <p className="text-gray-600 text-sm">
            Analyze product details to generate a short AI explanation about its
            environmental impact and eco-friendly benefits.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
