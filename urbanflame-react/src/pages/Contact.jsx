import { Helmet } from "react-helmet-async";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Us | Priya Chimney & RO Repair Services</title>
        <meta
          name="description"
          content="Contact Priya Chimney & RO Repair Services for chimney, RO and hob repair near you."
        />
      </Helmet>

      {/* HERO */}
      <section className="h-[300px] relative">
        <img
          src="/images/g2.jpg"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">Contact Us</h1>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10">

        {/* CONTACT INFO */}
        <div>
          <h2 className="text-3xl font-bold text-cyan-600 mb-6">
            Get In Touch
          </h2>

          <p className="mb-4">
            We are available 7 days a week for doorstep service.
          </p>

          <ul className="space-y-4 text-gray-700">
            <li>📍 Service Area: Delhi NCR</li>
            <li>📞 Phone: <a href="tel:+917417210241" className="text-cyan-600">+91 84759 07909</a></li>
            <li>💬 WhatsApp: <a href="https://wa.me/917417210241" className="text-cyan-600">Chat Now</a></li>
            <li>✉️ Email: nehacare26@gmail.com</li>
          </ul>
        </div>

        {/* CONTACT FORM */}
        <form className="bg-gray-100 p-6 rounded-lg shadow space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border rounded"
            required
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full p-3 border rounded"
            required
          />
          <select className="w-full p-3 border rounded">
            <option>Chimney Repair</option>
            <option>RO Repair</option>
            <option>Hob / Gas Stove</option>
          </select>
          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full p-3 border rounded"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-cyan-600 text-white py-3 rounded hover:bg-cyan-700"
          >
            Submit Request
          </button>
        </form>
      </section>
    </>
  );
}