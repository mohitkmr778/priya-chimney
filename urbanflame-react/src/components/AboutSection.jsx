import { Helmet } from "react-helmet-async";
import AboutSection from "../components/AboutSection";

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About Us | Priya Chimney</title>
      </Helmet>

      <AboutSection />
    </>
  );
}