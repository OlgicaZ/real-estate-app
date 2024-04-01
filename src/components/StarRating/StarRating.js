import './StarRating.scss';

import { RxStarFilled } from "react-icons/rx";
import { ImStarEmpty } from "react-icons/im";

export default function StarRating({ rating }) {
    return (
        <div className='rating'>
            {
                [...Array(5).keys()].map((item, index) => (item < rating) ? <RxStarFilled key={index} /> : <ImStarEmpty key={index}/>)
            }
        </div>
    )
}