import Header from "@/components/Header";
import Hero from "@/components/Hero";
import UseCasesGrid from "@/components/UseCasesGrid";
import ValueProposition from "@/components/ValueProposition";
import DealRoomShowcase from "@/components/DealRoomShowcase";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <UseCasesGrid />
        <ValueProposition />
        <DealRoomShowcase />
      </main>
      <Footer />
    </>
  );
}
