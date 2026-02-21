import { ServiceHero } from "../components/ServiceHero";
import { ServiceContent } from "../components/ServiceHero";
export default function RoService() {
  return (
    <>
      <ServiceHero title="RO Water Purifier Service" img="/images/ro.jpg" />
      <ServiceContent>
        <h2 className="text-3xl font-bold mb-2">
          Water Purifier
        </h2>
        <h4 className="text-xl font-semibold text-gray-800 mb-6">
          Best RO Water Purifier Repair & Service at Your Doorstep
        </h4>
        <p className="mb-4 leading-7">
            For the greatest RO water purifier installation, maintenance, and repair services, Abhaya Services is your go-to source, guaranteeing your family's access to clean and safe drinking water. We offer dependable and reasonably priced services for all of the top brands of RO water purifiers because to our staff of skilled experts and customer-first philosophy. Problems including water leaks, strange noises, poor or no water flow, unpleasant tastes or odors, and broken filters or pumps are all addressed by our RO repair services. To restore your purifier's functionality and guarantee a steady supply of clean drinking water, we employ authentic replacement parts and cutting-edge equipmen
        </p>
        <ul className="list-disc pl-6">
          <li>RO Installation</li>
          <li>Filter & Membrane Change</li>
          <li>Water Leakage Fix</li>
          <li>AMC Service</li>
        </ul>
      </ServiceContent>
    </>
  );
}