import React, { useState } from 'react';
import '../Modal.css';

const Modal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        link: '',
    });

    if (!isOpen) return null;

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
            const res = await fetch(`${process.env.REACT_APP_API}/cards`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
    
            if (res.ok) {
                alert("Added new data");
                setFormData({
                    title: '',
                    description: '',
                    link: '',
                });
                onClose();
            } else {
                console.log('Submission failed');
            }
        } catch (error) {
            console.error('Error submitting request:', error);
        }
    };

    console.log("This is formData", formData);

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-btn" onClick={onClose}>x</button>
                <h2>Submit Your Request</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type='text'
                        name='title'
                        placeholder='Add title here'
                        className='text-input'
                        value={formData.title}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name='description'
                        placeholder='Add description here'
                        className='text-input'
                        value={formData.description}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name='link'
                        placeholder='Add link if any here'
                        className='text-input'
                        value={formData.link}
                        onChange={handleChange}
                    />
                    <button type="submit" className='submit-btn'>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Modal;
