import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing/Pricing";
import FAQ from "@/components/FAQ";
import Logos from "@/components/Logos";
import Benefits from "@/components/Benefits/Benefits";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Logos />
      <Container>
        <Benefits />

        <Section
          id="pricing"
          title="Comprends tes prix réels"
          description="Découvre ce qui reste vraiment après tous les frais. Le calcul qui change tout pour ton business."
        >
          <Pricing />
        </Section>

        <Section
          id="testimonials"
          title="Ils ont transformé leur business"
          description="Des entrepreneurs comme toi qui ont enfin compris leurs vrais revenus et lancé des business viables."
        >
          <Testimonials />
        </Section>

        <FAQ />

        <Stats />

        <CTA />
      </Container>
    </>
  );
};

export default HomePage;
