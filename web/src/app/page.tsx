import { AboutCard } from "@/components/AboutCard";
import { BottomPlayer } from "@/components/BottomPlayer";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { NavBar } from "@/components/NavBar";
import { RecentlyPlayed } from "@/components/RecentlyPlayed";
import { RequestForm } from "@/components/RequestForm";
import { ScheduleGrid } from "@/components/ScheduleGrid";

export const revalidate = 60;

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <div className="container">
        <RecentlyPlayed />
        <ScheduleGrid />
        <section id="about">
          <div className="duo">
            <AboutCard />
            <RequestForm />
          </div>
        </section>
      </div>
      <Footer />
      <BottomPlayer />
    </>
  );
}
