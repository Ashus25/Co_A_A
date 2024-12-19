// import React, { useState, useEffect } from "react";
// import Modal from "./Modal"; // Ensure this is the correct path to your Modal component

// function Navbar() {
//   const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds
//   const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
//   const [isTimerRunning, setIsTimerRunning] = useState(true); // Timer state

//   // Timer logic
//   useEffect(() => {
//     let timer;
//     if (isTimerRunning && timeLeft > 0) {
//       timer = setInterval(() => {
//         setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
//       }, 1000);
//     }
//     return () => clearInterval(timer); // Clear timer on component unmount or state change
//   }, [isTimerRunning, timeLeft]);

//   // Format seconds to MM:SS
//   const formatTime = (time) => {
//     const minutes = Math.floor(time / 60);
//     const seconds = time % 60;
//     return `${minutes}:${seconds.toString().padStart(2, "0")}`;
//   };

//   // Handle modal actions
//   const handleEndClass = () => {
//     setIsModalOpen(true); // Open the modal
//   };

//   const handleEndClassConfirm = () => {
//     setIsTimerRunning(false); // Stop timer
//     setIsModalOpen(false); // Close modal
//   };

//   const handleCancel = () => {
//     setIsModalOpen(false); // Close modal without stopping timer
//   };

//   return (
//     <div className="navbar">
//       <div className="navbar-logo">
//         <img src="/logo.png" alt="Logo" />
//         <span>Codingal</span>
//       </div>
//       <div className="navbar-timer">{formatTime(timeLeft)}</div> {/* Timer always visible */}
//       <button className="end-class-btn" onClick={handleEndClass}>
//         End Class
//       </button>
//       {isModalOpen && (
//         <Modal
//           onConfirm={handleEndClassConfirm}
//           onCancel={handleCancel}
//           message="Are you sure you want to end the class?"
//         />
//       )}
//     </div>
//   );
// }

// export default Navbar;
import React, { useState, useEffect } from "react";
import Modal from "./Modal";

function Navbar() {
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  const [isTimerRunning, setIsTimerRunning] = useState(true); // Timer running state
  const [selectedReason, setSelectedReason] = useState(""); // Main reason for ending the class
  const [interruptionReason, setInterruptionReason] = useState(""); // Interruption-specific reason
  const [customReason, setCustomReason] = useState(""); // Custom reason text

  // Timer logic
  useEffect(() => {
    let timer;
    if (isTimerRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
      }, 1000);
    }
    return () => clearInterval(timer); // Clear timer on unmount or state change
  }, [isTimerRunning, timeLeft]);

  // Format time as MM:SS
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const handleEndClassClick = () => {
    setIsModalOpen(true); // Open modal
  };

  const handleConfirm = () => {
    setIsTimerRunning(false); // Stop timer
    console.log("Class Ended Reason:", selectedReason);
    console.log("Interruption Reason:", interruptionReason);
    console.log("Custom Reason:", customReason);
    setIsModalOpen(false); // Close modal
  };

  const handleCancel = () => {
    setIsModalOpen(false); // Close modal without stopping the timer
  };

  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src="/logo.png" alt="Logo" />
        <span>Codingal</span>
      </div>
      <div className="navbar-timer">{formatTime(timeLeft)}</div>
      <button className="end-class-btn" onClick={handleEndClassClick}>
        End Class
      </button>
      {isModalOpen && (
        <Modal
          onConfirm={handleConfirm}
          onCancel={handleCancel}
          selectedReason={selectedReason}
          setSelectedReason={setSelectedReason}
          interruptionReason={interruptionReason}
          setInterruptionReason={setInterruptionReason}
          customReason={customReason}
          setCustomReason={setCustomReason}
        />
      )}
    </div>
  );
}

export default Navbar;
