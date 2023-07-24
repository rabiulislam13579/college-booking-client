import React from 'react';
import Search from '../Search/Search';
import CollegeCards from '../CollegeCards/CollegeCards';
import CollegeGallery from '../CollegeGallery/CollegeGallery';
import Research from '../Research/Research';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div>
           <Search></Search>
           <CollegeCards></CollegeCards>
           <CollegeGallery></CollegeGallery>
           <Research></Research>
           <Review></Review>
        </div>
    );
};

export default Home;