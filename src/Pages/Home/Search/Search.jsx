import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Search = () => {
    const [collegeName, setCollegeName] = useState('');
    const [colleges, setColleges] = useState([]);
    const handleForm = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.collegeName.value;
        setCollegeName(name)
    }

    
    useEffect(() => {
        fetch('http://localhost:5000/colleges')
            .then(res => res.json())
            .then(data => setColleges(data))
    }, [])

    console.log(colleges)

    const college=colleges.find(college=>{
        college.collegeName==collegeName
    })
    console.log(college);


    return (
        <div className='text-center py-24'>
            <form onSubmit={handleForm}>
                <input type="text" name="collegeName" id="" placeholder='search the college name' className='mr-2 md:px-20 py-2 rounded-lg text-black' />
                <button className='bg-yellow-600 px-5 py-2 rounded-lg font-semibold' ><Link><input type="submit" value="search" /></Link></button>
                
            </form>
           
        </div>
    );
};

export default Search;