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
          title="Ton abonnement à 19€ en réalité"
          description="Le moment où tu comprends que 19€ facturés ne font pas 19€ gagnés."
        >
          <Pricing />
        </Section>

        <Section
          id="testimonials"
          title="Pourquoi c'est indispensable"
          description="Fixer un prix rentable avant de vendre, savoir combien vaut un client de plus, arrêter de piloter à l'aveugle."
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
