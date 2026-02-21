import { Routes, Route, NavLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { FaWhatsapp } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ChimneyService from "./pages/ChimneyService";
import RoService from "./pages/RoService";
import HobService from "./pages/HobService";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AboutSection from "./components/AboutSection";
/* ================= NAVBAR ================= */
import { useState } from "react";
import { Link } from "react-router-dom";


function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-[9999] bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 h-16 flex justify-between items-center">

        <div className="text-xl font-bold text-cyan-400">
          PriyaChimney
        </div>

        <ul className="hidden md:flex items-center gap-8">

          <NavItem to="/" text="Home" />
          <NavItem to="/about" text="About" />

          {/* SERVICES CLICK DROPDOWN */}
          <li className="relative">
            <button
              onClick={() => setOpen(!open)}
              className="hover:text-cyan-400"
            >
              Services ▾
            </button>

            {open && (
              <ul className="absolute top-full left-0 mt-2 w-64 bg-white text-black rounded shadow-lg z-[9999]">
                <DropItem to="/chimney-repair-service" text="Chimney Repair Service" />
                <DropItem to="/ro-repair-service" text="RO Water Purifier Service" />
                <DropItem to="/hob-repair-service" text="Gas Stove / Hob Service" />
              </ul>
            )}
          </li>

          <NavItem to="/contact" text="Contact" />

          <li>
            <a
              href="tel:+917417210241"
              className="bg-red-600 px-4 py-2 rounded"
            >
              📞 Call Now
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

const NavItem = ({ to, text }) => (
  <li>
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? "text-cyan-400" : "hover:text-cyan-400"
      }
    >
      {text}
    </NavLink>
  </li>
);

const DropItem = ({ to, text }) => (
  <li>
    <NavLink
      to={to}
      className="block px-4 py-3 hover:bg-cyan-500 hover:text-white"
    >
      {text}
    </NavLink>
  </li>
);


/* ================= HOME ================= */
function Home() {
  return (
    <>
      <Helmet>
        <title>PriyaChimney | Chimney, RO & Hob Repair</title>
      </Helmet>

      {/* SLIDER */}
      <div className="h-[450px]">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          navigation
          loop
          className="h-full"
        >
          <SwiperSlide>
            <img src="/images/slide1.jpg" className="w-full h-full object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/slide2.jpg" className="w-full h-full object-cover" />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* ABOUT */}
      <Section title="About PriyaChimney">
        <p>
          Welcome to Priya Chimney, your trusted local expert for chimney repair, RO repair, and gas stove repair services. We are committed to keeping your kitchen safe, efficient, and hassle-free with fast, reliable, and affordable repair solutions.
          At Priya Chimney, we understand how important your kitchen appliances are to your daily life. A faulty chimney, RO system, or gas stove can disrupt your routine and create safety concerns. That’s why we provide prompt, professional repair services backed by skilled technicians and quality workmanship.

          With years of hands-on experience, our team specializes in diagnosing issues quickly and delivering long-lasting solutions. Whether it’s a minor fix or a major repair, we treat every job with the same level of dedication and care.
        </p>
      </Section>

      {/* MISSION & VISION */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 px-4">
          <Card title="Our Mission">
            To provide reliable, affordable and professional appliance repair
            services with complete customer satisfaction.
          </Card>
          <Card title="Our Vision">
            To become India’s most trusted home appliance service brand with
            quality-driven solutions.
          </Card>
        </div>
      </section>

      {/* SERVICES */}
      <Section title="Our Services">
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <ServiceCard key={i} {...s} />
          ))}
        </div>
      </Section>
    </>
  );
}

/* ================= PAGES ================= */
<AboutSection />

const SimpleService = ({ title }) => (
  <Section title={title}>
    <p>Professional {title} service with experienced technicians.</p>
  </Section>
);

/* ================= FOOTER ================= */
function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300 pt-14">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-10">

        <FooterCol title="About">
          PriyaChimney offers expert kitchen appliance repair services across
          Delhi NCR.
        </FooterCol>

        <FooterCol title="Quick Links">
          <FooterLink text="Home" />
          <FooterLink text="About" />
          <FooterLink text="Services" />
          <FooterLink text="Contact" />
        </FooterCol>

        <FooterCol title="Our Location">
          Greater Noida, Delhi NCR <br />
          📞 +91 7417210241 <br />
          ✉️ support@priyachimney.shop
        </FooterCol>

        <FooterCol title="Gallery">
          <div className="grid grid-cols-3 gap-2">
            {["g1", "ro", "g4"].map(i => (
              <img key={i} src={`/images/${i}.jpg`} className="rounded" />
            ))}
          </div>
        </FooterCol>
      </div>

      <div className="text-center text-sm border-t border-slate-700 mt-10 py-4">
        © 2024 PriyaChimney. All Rights Reserved.
      </div>
    </footer>
  );
}

/* ================= FLOATING BUTTONS ================= */
function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-[9999]">

      {/* WhatsApp */}
      <a
  href="https://wa.me/917417210241"
  target="_blank"
  className="fixed bottom-24 right-6 z-50 bg-green-500 p-4 rounded-full shadow-lg text-white text-3xl"
>
  <FaWhatsapp />
</a>

      {/* Call */}
      <a
        href="tel:+917417210241"
        className="bg-red-600 p-4 rounded-full shadow-lg text-white text-xl"
      >
        📞
      </a>
    </div>
  );
}

/* ================= APP ================= */
export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/chimney-repair-service" element={<ChimneyService />} />
        <Route path="/ro-repair-service" element={<RoService />} />
        <Route path="/hob-repair-service" element={<HobService />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <FloatingButtons />
      <Footer />
    </>
  );
}

/* ================= REUSABLE ================= */
const Section = ({ title, children }) => (
  <section className="py-16 px-4 max-w-7xl mx-auto text-center">
    <h2 className="text-3xl font-bold text-cyan-500 mb-6">{title}</h2>
    <div className="text-gray-700 max-w-4xl mx-auto">{children}</div>
  </section>
);

const Card = ({ title, children }) => (
  <div className="bg-white p-6 rounded-xl shadow">
    <h3 className="text-xl font-semibold mb-3 text-cyan-500">{title}</h3>
    <p>{children}</p>
  </div>
);

const ServiceCard = ({ title, img, desc, link }) => (
  <div className="bg-white rounded-xl shadow overflow-hidden">
    <img src={img} className="h-48 w-full object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="mb-4 text-sm">{desc}</p>
      <Link to={link}>
      <button className="bg-cyan-500 text-white px-4 py-2 rounded">
        Read More
      </button>
      </Link>
    </div>
  </div>
);

const FooterCol = ({ title, children }) => (
  <div>
    <h3 className="text-xl text-cyan-400 mb-4">{title}</h3>
    <div className="text-sm space-y-2">{children}</div>
  </div>
);

const FooterLink = ({ text }) => (
  <div className="hover:text-cyan-400 cursor-pointer">{text}</div>
);

const services = [
  {
    title: "Kitchen Chimney Repair",
    img: "/images/g1.jpg",
    desc: "Expert chimney cleaning & repair service.",
    link: "chimney-repair-service",
  },
  {
    title: "RO Water Purifier Repair",
    img: "/images/ro.jpg",
    desc: "Professional RO installation & repair.",
    link: "ro-repair-service",
  },
  {
    title: "Gas Stove / Hob Repair",
    img: "/images/g4.jpg",
    desc: "Reliable gas hob & stove service.",
    link: "hob-repair-service",
  }
];