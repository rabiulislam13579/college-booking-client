import React from 'react';
import Marquee from "react-fast-marquee";
import img1 from '../../../assets/unnamed.jpg'
import img2 from '../../../assets/unnamed (1).jpg'
import img3 from '../../../assets/unnamed (2).jpg'
import img4 from '../../../assets/unnamed (3).jpg'
import img5 from '../../../assets/unnamed (4).jpg'
import img6 from '../../../assets/unnamed (5).jpg'
import img7 from '../../../assets/unnamed (6).jpg'
import img8 from '../../../assets/unnamed (7).jpg'

const CollegeGallery = () => {
    return (
        <div className='mt-6'>
            <h1 className='text-4xl text-yellow-600 text-center py-6 font-semibold'>College Gallery</h1>
            <Marquee>
                <img className='w-60 h-60 mr-4' src={img1} alt="" />
                <img className='w-60 h-60 mr-4' src={img2} alt="" />
                <img className='w-60 h-60 mr-4' src={img3} alt="" />
                <img className='w-60 h-60 mr-4' src={img4} alt="" />
                <img className='w-60 h-60 mr-4' src={img5} alt="" />
                <img className='w-60 h-60 mr-4' src={img6} alt="" />
                <img className='w-60 h-60 mr-4' src={img7} alt="" />
                <img className='w-60 h-60 mr-4' src={img8} alt="" />
            </Marquee>
        </div>
    );
};

export default CollegeGallery;