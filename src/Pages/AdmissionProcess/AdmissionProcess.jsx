import React, { useEffect, useState } from 'react';
import Admission from '../Admission/Admission';

const AdmissionProcess = () => {
    const [colleges, setColleges] = useState([]);
    useEffect(() => {
        fetch('https://college-booking-server-blond.vercel.app/colleges')
            .then(res => res.json())
            .then(data => setColleges(data))
    }, [])
    return (
        <div>
            <h1 className='text-3xl font-semibold text-center text-yellow-600 py-16'>Admission Process</h1>
            {
                
                colleges.map(college=><Admission
                key={college._id}
                college={college}
                ></Admission>)
            }
        </div>
    );
};

export default AdmissionProcess;