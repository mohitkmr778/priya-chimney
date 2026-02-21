import { ServiceHero } from "../components/ServiceHero";
import { ServiceContent } from "../components/ServiceHero";
export default function HobService() {
  return (
    <>
      <ServiceHero title="Gas Stove / Hob Service" img="/images/g4.jpg" />
      <ServiceContent>
        <h2 className="text-3xl font-bold mb-2">
          About Quality
        </h2>
        <h4 className="text-xl font-semibold text-gray-800 mb-6">
          Modern Service Standard
        </h4>
        <p className="mb-4 leading-7">
            At Priya Chimney, we provide professional and reliable gas stove repair services to keep your kitchen running safely and smoothly. A faulty gas stove can cause inconvenience and even safety risks — that’s why our experienced technicians ensure quick diagnosis and effective repair at your doorstep.

        </p>
        <ul className="list-disc pl-6">
          <li>Burner Repair</li>
          <li>Gas Leakage Fix</li>
          <li>Ignition Issue</li>
          <li>Cleaning & Servicing</li>
        </ul>
      </ServiceContent>
    </>
  );
}