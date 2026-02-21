import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";

/* ================= Layout ================= */
function Header() {
  return (
    <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">UrbanFlame Chimney</h1>
        <nav className="space-x-4 hidden md:block">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/about" className="hover:underline">About Us</Link>
          <Link to="/services" className="hover:underline">Services</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-6">
        <div>
          <h4 className="font-bold text-white mb-2">UrbanFlame Chimney</h4>
          <p>Professional kitchen chimney service across Delhi NCR & UP.</p>
        </div>
        <div>
          <h4 className="font-bold text-white mb-2">Service Areas</h4>
          <p>Delhi, Ghaziabad, Greater Noida, Noida, UP</p>
        </div>
        <div>
          <h4 className="font-bold text-white mb-2">Contact</h4>
          <p>📞 +91-XXXXXXXXXX</p>
          <p>✉️ support@urbanflamechimney.com</p>
        </div>
      </div>
      <p className="text-center text-sm mt-6">© 2026 UrbanFlame Chimney</p>
    </footer>
  );
}

/* ================= Pages ================= */
/* ================= Swiper Slider ================= */
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Home() {
  return (
    <>
      {/* Hero Slider */}
      <section className="bg-gray-100">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-8 items-center"
        >
          <div>
            <h2 className="text-4xl font-bold mb-4 text-indigo-700">
              Chimney Repair & Installation in Delhi NCR
            </h2>
            <p className="mb-6 text-lg">
              Same-day chimney service in Delhi, Ghaziabad, Greater Noida & UP.
            </p>
            <Button className="bg-indigo-600 hover:bg-indigo-700">Book Service</Button>
          </div>
          <img
            src="https://images.unsplash.com/photo-1600488999585-e4364713b90b"
            alt="Chimney Service Delhi"
            className="rounded-2xl shadow-lg"
          />
        </motion.div>
      </section>

      {/* Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-purple-700">Our Services</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {["Installation", "Repair", "Cleaning"].map((s) => (
              <Card key={s} className="hover:shadow-xl transition">
                <CardContent className="p-6 text-center">
                  <h4 className="text-xl font-semibold mb-2">Chimney {s}</h4>
                  <p>Affordable and reliable chimney {s.toLowerCase()} services.</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Local SEO */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-6 text-indigo-700">Serving Areas</h3>
          <p className="mb-8">
            Trusted chimney service provider in Delhi, Ghaziabad, Greater Noida,
            Noida and nearby UP regions.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 font-medium">
            <span>Delhi</span><span>Ghaziabad</span><span>Greater Noida</span><span>Noida</span>
          </div>
        </div>
      </section>
    </>
  );
}

function About() {
  return (
    <section className="py-16 max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-6 text-indigo-700">About Us</h2>
      <p className="mb-4">
        UrbanFlame Chimney is a trusted name for kitchen chimney installation,
        repair and cleaning services in Delhi NCR.
      </p>
      <p>
        Our local technicians ensure fast response, genuine spare parts and
        affordable pricing across UP.
      </p>
    </section>
  );
}

function Services() {
  return (
    <section className="py-16 max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-6 text-purple-700">Our Services</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Kitchen Chimney Installation</li>
        <li>Chimney Repair (All Brands)</li>
        <li>Deep Cleaning & Maintenance</li>
        <li>Motor & Filter Replacement</li>
      </ul>
    </section>
  );
}

function Contact() {
  return (
    <section className="py-16 max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-6 text-indigo-700">Contact Us</h2>
      <p className="mb-2">📍 Service Area: Delhi NCR & UP</p>
      <p className="mb-2">📞 Phone: +91-XXXXXXXXXX</p>
      <p className="mb-6">✉️ Email: support@urbanflamechimney.com</p>
      <Button className="bg-purple-600 hover:bg-purple-700">Call Now</Button>
    </section>
  );
}

/* ================= WhatsApp Floating Button ================= */
function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/91XXXXXXXXXX"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600"
    >
      <MessageCircle />
    </a>
  );
}

/* ================= App ================= */
export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
    </Router>
  );
}
