import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA";
import { Button } from "@/components/ui/button";
import { recentSessions } from "@/constants";

const Page = () => {
  return (
    <main>
      <h1 className="text-2xl underline">Popular Companions</h1>
      <section className="home-section">
        <CompanionCard
          id={123}
          name="Neura The Brainy Explorer"
          topic="Neural Network of the Brain"
          subject="Science"
          duration={45}
          color="#ffda6e"
        />
        <CompanionCard
          id={456}
          name="Countsy The Number Wizard"
          topic="Derivatives and Intergrals"
          subject="Math"
          duration={30}
          color="#e5d0ff"
        />
        <CompanionCard
          id={789}
          name="Verba the Vocabulary Builder"
          topic="Neural Network of the Brain"
          subject="English Literature"
          duration={45}
          color="#bde7ff"
        />
      </section>

      <section className="home-section">
        <CompanionsList
          title="Recently completed sessions"
          companions={recentSessions}
          classNames="w-2/3 max-lg:w-full"
        />
        <CTA />
      </section>
    </main>
  );
};

export default Page;
