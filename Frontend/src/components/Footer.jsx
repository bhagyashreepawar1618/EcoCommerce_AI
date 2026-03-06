import React from "react";

const Footer = () => {
  return (
    <footer className="bg-purple-600 text-white py-4 mt-10">
      <div className="text-center text-sm">
        © {new Date().getFullYear()} EcoCommerce AI • Built for Sustainable
        Commerce 🌱
      </div>
    </footer>
  );
};

export default Footer;
