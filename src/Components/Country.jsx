import Countries from "./Countries";


import React, { useState, useEffect } from 'react';

function Country() {
  // State to store the data from the API
  const [data, setData] = useState([]);


  data.reverse()

  // useEffect will run after the component has rendered
  useEffect(() => {
    // Function to fetch data from an API (you can replace this with a real API URL)

    //sort countries

    async function fetchData() {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const json = await response.json();
        setData(json);
      } catch (error) {
        //console.error('Error fetching data:', error);
      }
    }

    // Call the fetchData function when the component mounts
    fetchData();

    // The empty dependency array [] means this effect will only run once after the initial render
  }, []);

  return (
    <div className="mx-auto container text-center">
      <h1 className="text-6xl font-bold my-8">My Countries</h1>
      <button className="btn btn-secondary">Sort</button>
      <ul className="flex flex-wrap gap-6">
        {data.map((item) => (

            <li key={item.cca2} className="flex w-1/3 justify-left items-center text-4xl bg-red-400 my-6 py-8 "><span> <img className="w-12 px-2" src={item.coatOfArms.png} /> </span>{item.name.common}</li>

        //console.log(item.cca2)
        ))}
      </ul>
    </div>
  );
}

export default Country;
