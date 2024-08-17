import { useState } from "react";
import "../App.css";
import Logo from "../images/Logo.png";
import Modal from "./Modal";

export default function Nav() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    return (
        <>
            <nav className="navbar">
                <div className="navbar-left">
                    <a href="/">
                        <img src={Logo} alt="Abstract logo" className="logo" />
                    </a>
                    <span className="divider">|</span>
                    <h1 className="title">Help Center</h1>
                </div>
                <div className="navbar-right">
                    <button className="submit-request-btn" onClick={openModal}>Submit a request</button>
                </div>
            </nav>
            <Modal isOpen={isModalOpen} onClose={closeModal} />
        </>
    )
}
