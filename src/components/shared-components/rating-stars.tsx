import React from 'react'
import { FaStar } from "react-icons/fa6";
import { FaStarHalfStroke } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa6";

type Props = {
    rating: number;
}

const TOTAL_STARS_COUNT = 5;

// 4.5
// 4.0
// 3.0
// 3.5
// 2.5


export default function RatingStars({ rating }: Props) {
    const fullStarLength = Math.floor(rating) // 2
    const emptyStarLength = TOTAL_STARS_COUNT - Math.ceil(rating)
    const halfStarLength = TOTAL_STARS_COUNT - fullStarLength - emptyStarLength

    return (
        <div className='flex items-center gap-1'>
            {
                new Array(fullStarLength).fill('_').map((_, ind) => <FaStar key={ind} className='text-orange-400' />)
            }
            {
                new Array(halfStarLength).fill('_').map((_, ind) => <FaStarHalfStroke key={ind} className='text-orange-400' />)
            }
            {
                new Array(emptyStarLength).fill('_').map((_, ind) => <FaRegStar key={ind} className='text-orange-400' />)
            }
        </div>
    )
}