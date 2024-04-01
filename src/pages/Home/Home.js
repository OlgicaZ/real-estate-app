import Header from "../../components/Header/Header";
import About from "../../components/About/About";
import VideoHero from "../../components/VideoHero/VideoHero";
import Testimonials from "../../components/Testimonials/Testimonials";
import CommunityGuide from "../../components/CommunityGuide/CommunityGuide";

export default function Home() {
  return (
    <>
      <Header />
      <VideoHero />
      <About />
      <Testimonials />
      <CommunityGuide />
    </>
  );
}
