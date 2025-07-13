import React from "react";
import logoImg from "./assets/IMG_4788.PNG"; // <-- Make sure this is the correct path
const collections = [
  {
    img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80",
    alt: "Collection 1",
  },
  {
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
    alt: "Collection 2",
  },
  {
    img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80",
    alt: "Collection 3",
  },
];

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-[#223047] text-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-2 px-6">
          <div className="flex items-center">
            <img src={logoImg} alt="Domi Trend Logo" className="h-16 w-auto mr-4" />
          </div>
          <nav className="flex flex-wrap gap-6 mt-2 md:mt-0">
            <a href="#" className="hover:text-[#b85c2b] transition">Home</a>
            <a href="#" className="hover:text-[#b85c2b] transition">Shop</a>
            <a href="#" className="hover:text-[#b85c2b] transition">New Arrivals</a>
            <a href="#" className="hover:text-[#b85c2b] transition">About</a>
            <a href="#" className="hover:text-[#b85c2b] transition">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-white py-10">
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6">
          <div className="md:w-1/2 w-full text-center md:text-left mt-6 md:mt-0">
            <h1 className="text-4xl !md:text-5xl !font-bold w-30 !font-[popins] text-[#223047] mb-6 ">
              Everyday Luxury. <br /> Redefined.
            </h1>
            <button className="bg-[#b85c2b] hover:bg-[#a04a1e] text-white px-8 py-3 rounded font-medium text-lg transition">
              Shop Now
            </button>
          </div>
          <div className="md:w-1/2 w-full flex justify-center">
           
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="bg-gray-50 py-10">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold text-[#223047] text-center mb-2">
            Featured Collections
          </h2>
          <p className="text-gray-500 text-center mb-8">
            Discover the latest trends
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            {collections.map((col, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg shadow hover:scale-105 transition-transform w-60"
              >
                <img
                  src={col.img}
                  alt={col.alt}
                  className="w-full h-72 object-cover rounded-t-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promo Bar */}
      <section className="bg-[#b85c2b] text-white text-center py-3 text-lg font-medium">
        Flat 20% Off on Your First Order – Use Code <span className="font-bold">DOMI20</span>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 mt-auto">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-6 px-6 gap-4">
          <div className="font-bold text-lg">Fungai</div>
          <div className="flex gap-6">
            <a href="#" className="text-[#223047] hover:underline">Links</a>
            <a href="#" className="text-[#223047] hover:underline">Social</a>
            <a href="#" className="text-[#223047] hover:underline">FMO</a>
          </div>
          <div className="flex gap-4 text-xl">
            <span role="img" aria-label="search">🔍</span>
            <span role="img" aria-label="mail">✉️</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
