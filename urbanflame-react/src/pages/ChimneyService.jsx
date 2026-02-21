import { Helmet } from "react-helmet-async";
import { ServiceHero } from "../components/ServiceHero";
import { ServiceContent } from "../components/ServiceHero";

export default function ChimneyService() {
  return (
    <>
      <Helmet>
        <title>Chimney Repair Service | PriyaChimney</title>
        <meta
          name="description"
          content="Professional kitchen chimney repair, cleaning and installation service near you."
        />
      </Helmet>

      <ServiceHero
        title="Chimney Repair Service"
        img="/images/g1.jpg"
      />

      <ServiceContent>
        <h2 className="text-3xl font-bold mb-2">
          About Quality
        </h2>
        <h4 className="text-xl font-semibold text-gray-800 mb-6">
          Expert Chimney Repair & Maintenance Services
        </h4>
        <p className="mb-4 leading-7">
            A kitchen chimney plays a vital role in keeping your kitchen clean, smoke-free, and fresh. Over time, chimneys may face problems like reduced suction power, unusual noise, oil blockages, or motor issues. If your chimney is not working efficiently, it’s time to call the best chimney repair service near you. We provide professional chimney repair, cleaning, and maintenance services for all major brands and models. Our trained technicians use advanced tools to diagnose problems quickly and offer long-lasting solutions at affordable prices. Whether it’s a wall-mounted, island, or built-in chimney, we handle every type with care and expertise.

Your kitchen will remain safe, smoke-free, and clean with Abhaya Chimney Service as your go-to partner for the best chimney installation, maintenance, and repair services. We provide dependable services for all kinds and brands of chimneys at reasonable costs thanks to our years of experience and staff of knowledgeable experts. A variety of problems are covered by our chimney repair service, such as motor failures, decreased suction, strange noises, clogged filters, damaged ducts, and electrical malfunctions. To provide you piece of mind and prolong the life of your chimney, we exclusively utilize authentic replacement parts and up-to-date equipment.
        </p>
        <p>
          We provide expert kitchen chimney repair service including
          motor repair, cleaning, filter replacement and installation.
        </p>

        <ul className="list-disc pl-6 mt-4">
          <li>Chimney Cleaning</li>
          <li>Motor Replacement</li>
          <li>Noise Issue Fix</li>
          <li>Installation & Uninstallation</li>
        </ul>
      </ServiceContent>
    </>
  );
}