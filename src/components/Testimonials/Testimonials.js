import { Link } from 'react-router-dom';
import './Testimonials.scss';

export default function Testimonials() {
    return (
        <section className='testimonials'>
            <div className='testimonials__container'>
                <div className='testimonials__mission'>
                    <h2>Our Mission</h2>
                    <h3>Experiencing lives with our knowledge and experience so that together we can leave legacies worth living</h3>
                </div>
                <div className='testimonials__values'>
                    <h2>Our Values</h2>
                    <h3>God, Family, and then Business</h3>
                </div>
                <Link className='testimonials__more-button'>LEARN MORE</Link>
            </div>
        </section>
    )
}