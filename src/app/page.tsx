import { AnnouncementBar } from "@/components/announcement-bar";
import { Hero } from "@/components/hero";
import { Marquee } from "@/components/marquee";
import { NewIn } from "@/components/new-in";
import { Newsletter } from "@/components/newsletter";
import { PromiseSection } from "@/components/promise-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Marquee />
        <NewIn />
        <PromiseSection />
        <Newsletter />
      </main>
      <SiteFooter />
    </>
  );
}
