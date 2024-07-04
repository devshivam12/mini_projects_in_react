import React, { useState } from 'react';

const countries = [
    {
        name: 'India', value: 'IN', cities: [
            'Delhi',
            'MP'
        ]
    },
    {
        name: 'US', value: 'US', cities: [
            'NY',
            'Chicago'
        ]
    },
    {
        name: 'Bangladesh', value: 'BG', cities: [
            'Dhaka',
            'Chittagong'
        ]
    }
];

const Practise = () => {
    const [selectedCountry, setSelectedCountry] = useState('');

    const handleCountryChange = (e) => {
        setSelectedCountry(e.target.value);
    };

    const selectedCountryObj = countries.find(country => country.name === selectedCountry);

    return (
        <div>
            <div>
                <select onChange={handleCountryChange}>
                    <option value="">Select a country</option>
                    {countries.map((country, index) => (
                        <option key={index} value={country.name}>{country.name}</option>
                    ))}
                </select>
            </div>

            {selectedCountry && (
                <div>
                    <select>
                        <option value="">Select a city</option>
                        {selectedCountryObj.cities.map((city, index) => (
                            <option key={index} value={city}>{city}</option>
                        ))}
                    </select>
                </div>
            )}
        </div>
    );
};

export default Practise;
