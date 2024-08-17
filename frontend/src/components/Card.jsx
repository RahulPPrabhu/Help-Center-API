import React, { useContext, useEffect } from "react";
import { DataContext } from './DataContext';

export const Card = () => {
    const { data, setData } = useContext(DataContext);

    const fetchAllCards = async () => {
        const res = await fetch(`${process.env.REACT_APP_API}/cards`);
        if (res.ok) {
            const fetchedData = await res.json();
            setData(fetchedData);
        } else {
            console.log("Something went wrong");
        }
    };

    useEffect(() => {
        fetchAllCards();
    }, []);

    return (
        <div className="card-grid">
            {data.map((item) => (
                <div className="card" key={item?._id}>
                    <p className="card-header">{item?.title}</p>
                    <hr className="card-hr"></hr>
                    <p className="card-content">{item?.description}</p>
                </div>
            ))}
        </div>
    );
};
