import ProperyCard from '../PropertyCard/PropertyCard';
import './FilterResults.scss';

export default function FilterResults({ className, selectedView, data }) {

    console.log(data, selectedView);

    return (
        <section className={`${className} listings`}>
            <div className='listings__header'>
                {data.length} (Houses for sale)
            </div>
            <div className={`listings__container listings__container--${selectedView}`}>
                <ProperyCard property={data[0]} />
                <ProperyCard property={data[1]} />
                <ProperyCard property={data[2]} />
                <ProperyCard property={data[3]} />
                <ProperyCard property={data[4]} />
            </div>
        </section>
    )
}