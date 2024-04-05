import Header from "../../components/Header/Header";
import About from "../../components/About/About";
import VideoHero from "../../components/VideoHero/VideoHero";
import Testimonials from "../../components/Testimonials/Testimonials";
import CommunityGuide from "../../components/CommunityGuide/CommunityGuide";
import Careers from "../../components/Careers/Careers";
import Footer from "../../components/Footer/Footer";
import Contact from "../../components/Contact/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <VideoHero />
        <About />
        <Testimonials />
        <CommunityGuide />
        <Careers />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
