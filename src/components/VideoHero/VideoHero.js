import './VideoHero.scss';
import videoSource from './../../assets/videos/miami-bridge.mp4'
import { Link } from 'react-router-dom';

export default function VideoHero() {
    return (
        <div className="hero">
            <video
                className='hero__player'
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
            <section className='hero__link-container'>
                <Link to='/buy'>
                    <h3>Find Your</h3>
                    <h2>DREAM HOME</h2>
                </Link>
                <Link to='/sell'>
                    <h3>Find Your</h3>
                    <h2>HOME VALUE</h2>
                </Link>
            </section>
        </div>
    )
}