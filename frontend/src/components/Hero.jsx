import React, { useState, useContext } from 'react';
import "../App.css";
import { DataContext } from './DataContext';

export default function Hero() {
    const [searchInput, setSearchInput] = useState("");
    const { data, setData } = useContext(DataContext);

    const handleChange = (e) => {
        setSearchInput(e.target.value);
    };

    const searchData = async () => {
        const res = await fetch(`${process.env.REACT_APP_API}/cards`);
        if (res.ok) {
            const fetchedData = await res.json();
            // Filter the fetched data based on searchInput
            const filteredData = fetchedData.filter(item =>
                item.title.toLowerCase().includes(searchInput.toLowerCase()) ||
                item.description.toLowerCase().includes(searchInput.toLowerCase())
            );
            setData(filteredData);
        } else {
            console.log("Something went wrong");
        }
    };

    return (
        <>
            <h1 className="headline">How can we help?</h1>
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search"
                    className="search-input"
                    onChange={handleChange}
                    value={searchInput}
                />
                <button className="search-button" onClick={searchData}>
                    <span className="arrow">→</span>
                </button>
            </div>
            <div className="space-below"></div>
        </>
    );
}
