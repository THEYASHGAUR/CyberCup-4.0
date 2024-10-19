import React, { useState } from 'react';
import './App.css';
import Modal from './Modal';  // Import the Modal component

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="title">Smart Traffic Management System</h1>
      </header>

      <main className="app-main">
        <p className="description">
          Optimize traffic flow, reduce congestion, and prioritize emergency routes with AI-powered management.
        </p>
        <button className="try-now-btn" onClick={handleOpenModal}>Try Now</button>
      </main>

      <footer className="app-footer">
        <p>&copy; 2024 Smart Traffic Management. All rights reserved.</p>
      </footer>

      {/* Render Modal */}
      {isModalOpen && <Modal onClose={handleCloseModal} />}
    </div>
  );
}

export default App;
