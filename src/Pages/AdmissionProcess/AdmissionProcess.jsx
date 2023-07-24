import React, { useEffect, useState } from 'react';

const AdmissionProcess = () => {
    const [colleges, setColleges] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/colleges')
            .then(res => res.json())
            .then(data => setColleges(data))
    }, [])
    return (
        <div>
            <h1>Admission Process</h1>
        </div>
    );
};

export default AdmissionProcess;