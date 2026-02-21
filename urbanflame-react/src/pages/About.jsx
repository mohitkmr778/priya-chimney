import { Helmet } from "react-helmet-async";

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us | Priya Chimney & RO Repair Services</title>
        <meta
          name="description"
          content="Know more about Priya Chimney & RO Repair Services – trusted experts in chimney, RO & hob repair."
        />
      </Helmet>

      {/* HERO */}
      <section className="h-[300px] relative">
        <img
          src="/images/g2.jpg"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">About Us</h1>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-6xl mx-auto px-4 py-16 text-gray-700">
        <h2 className="text-3xl font-bold text-cyan-600 mb-6">
          Who We Are
        </h2>

        <p className="leading-7 mb-6">
          Welcome to Priya Chimney, your trusted local expert for chimney repair, RO repair, and gas stove repair services. We are committed to keeping your kitchen safe, efficient, and hassle-free with fast, reliable, and affordable repair solutions.
          At Priya Chimney, we understand how important your kitchen appliances are to your daily life. A faulty chimney, RO system, or gas stove can disrupt your routine and create safety concerns. That’s why we provide prompt, professional repair services backed by skilled technicians and quality workmanship.

          With years of hands-on experience, our team specializes in diagnosing issues quickly and delivering long-lasting solutions. Whether it’s a minor fix or a major repair, we treat every job with the same level of dedication and care.
        </p>

        <p className="leading-7 mb-10">
          Our trained technicians provide reliable, affordable, and long-lasting
          solutions across residential and commercial locations.
        </p>

        {/* MISSION & VISION */}
        <div className="grid md:grid-cols-2 gap-10">

          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <h3 className="text-2xl font-semibold mb-3 text-cyan-600">
              Our Mission
            </h3>
            <p>
              To deliver honest, fast and professional appliance repair services
              that ensure customer satisfaction and long-term trust.
            </p>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <h3 className="text-2xl font-semibold mb-3 text-cyan-600">
              Our Vision
            </h3>
            <p>
              To become the most reliable and recommended kitchen appliance
              service brand across India.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}