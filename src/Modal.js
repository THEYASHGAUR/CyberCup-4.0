import React from 'react';
import './Modal.css';  // Import modal-specific styles

function Modal({ onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="close-btn" onClick={onClose}>&times;</span>
        <h2>Images from Smart Traffic Management</h2>
        
        <div className="image-gallery">
          {/* Image 1 with description */}
          <div className="image-container">
            <img src="1.jpg" alt="Traffic 1" />
            <p className="image-description">Detecting Emergency Vehicles</p>
          </div>

          {/* Image 2 with description */}
          <div className="image-container">
            <img src="roadblock.jpg" alt="Traffic 2" />
            <p className="image-description">Detecting roadblocks and congestion</p>
          </div>

          {/* Image 3 with description */}
          <div className="image-container">
            <img src="wrongside.jpg" alt="Traffic 3" />
            <p className="image-description">Monitoring wrong-side driving violations</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
