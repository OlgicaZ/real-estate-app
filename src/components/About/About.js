import { Link } from 'react-router-dom';
import './About.scss';

export default function About() {
    return (
        <>
            <div className='about'>
                <section className='about__container'>
                    <div className='about__mission'>
                        <h2>Our Mission</h2>
                        <h3>Experiencing lives with our knowledge and experience so that together we can leave legacies worth living</h3>
                    </div>
                    <div className='about__values'>
                        <h2>Our Values</h2>
                        <h3>God, Family, and then Business</h3>
                    </div>
                    <Link to='/about' className='about__more-button cta-button'>LEARN MORE</Link>
                </section>
            </div>
            <section className='services'>
                    <div className='services__sell'>
                        <Link to='/sell'>
                            LIST YOUR HOME WITH US
                        </Link>
                    </div>
                    <div className='services__buy'>
                        <Link to='/buy'>
                            BUY NOW AND SELL LATER PROGRAM
                        </Link>
                    </div>
                    <div className='services__valuation'>
                        <Link to='/valuation'>
                            QUICK HOME VALUATION
                        </Link>
                    </div>
            </section>
        </>
    )
}