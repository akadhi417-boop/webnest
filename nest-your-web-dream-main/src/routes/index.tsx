import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/webnest/Navbar";
import { Hero } from "@/components/webnest/Hero";
import { About } from "@/components/webnest/About";
import { Services } from "@/components/webnest/Services";
import { MobileAppDev } from "@/components/webnest/MobileAppDev";
import { Portfolio } from "@/components/webnest/Portfolio";
import { WhyChoose } from "@/components/webnest/WhyChoose";
import { Process } from "@/components/webnest/Process";
import { Contact } from "@/components/webnest/Contact";
import { Footer } from "@/components/webnest/Footer";
import { CustomCursor } from "@/components/webnest/CustomCursor";
import { ScrollProgress } from "@/components/webnest/ScrollProgress";
import { LoadingScreen } from "@/components/webnest/LoadingScreen";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "WebNest — Premium Web & App Development Studio" },
      {
        name: "description",
        content:
          "WebNest builds fast, modern, scalable websites and mobile apps for startups and businesses. Web development, mobile app development, UI/UX, and IT solutions.",
      },
      { property: "og:title", content: "WebNest — Premium Web & App Development Studio" },
      {
        property: "og:description",
        content:
          "We build websites and mobile apps that grow your business. Modern, fast, scalable digital solutions.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();
  return (
    <>
      <LoadingScreen />
      <CustomCursor />
      <ScrollProgress />
      <main className="min-h-screen bg-background text-foreground cursor-none animate-page-enter">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <MobileAppDev />
        <Portfolio />
        <WhyChoose />
        <Process />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
