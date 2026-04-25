import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/webnest/Navbar";
import { Hero } from "@/components/webnest/Hero";
import { About } from "@/components/webnest/About";
import { Services } from "@/components/webnest/Services";
import { WhyChoose } from "@/components/webnest/WhyChoose";
import { Process } from "@/components/webnest/Process";
import { Contact } from "@/components/webnest/Contact";
import { Footer } from "@/components/webnest/Footer";
import { WhatsAppFloat } from "@/components/webnest/WhatsAppFloat";
import { CustomCursor } from "@/components/webnest/CustomCursor";
import { ScrollProgress } from "@/components/webnest/ScrollProgress";
import { LoadingScreen } from "@/components/webnest/LoadingScreen";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "WebNest — Premium Web Development Agency" },
      {
        name: "description",
        content:
          "WebNest builds fast, modern, scalable websites for startups and businesses. Web development, UI/UX, e-commerce and maintenance.",
      },
      { property: "og:title", content: "WebNest — Premium Web Development Agency" },
      {
        property: "og:description",
        content:
          "We build websites that grow your business. Modern, fast, scalable digital solutions.",
      },
    ],
  }),
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
        <WhyChoose />
        <Process />
        <Contact />
        <Footer />
        <WhatsAppFloat />
      </main>
    </>
  );
}
