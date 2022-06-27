import React from 'react';
import { Link } from 'react-router-dom';

const BeasiswaCard = (props) =>{
    return(
        <>
            <Link to='/detailbeasiswa'>
                <div className='mb-5'>
                    <div className="flex gap-2">
                        <img className='w-5 h-5' src="http://placeimg.com/200/150/tech" alt="" />
                        <div className='max-w-xs'>
                            <p className='font-semibold text-medium'>{props.title}</p>
                            <p className='desc text-gray-500 text-sm'>{props.desc}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}


export default BeasiswaCard;