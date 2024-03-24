import Header from "../../components/Header/Header";
import videoSource from './../../assets/videos/miami-bridge.mp4'

export default function Home() {
  return (
    <>
      <Header />
      <div className="header__video">
        <video
          muted
          loop
          playsInline
          role='presentation'
          aria-hidden='true'
          autoPlay
          preload='auto'
        >
          <source 
            src={videoSource}
            type="video/mp4"
          />
        </video>
      </div>
      <div>
        fhgjhdfgjdfnvfhgjhdfgjdfnv
      </div>
    </>
  );
}
