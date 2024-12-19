// import React from "react";

// function Modal({ onConfirm, onCancel, message }) {
//   return (
//     <div className="modal-overlay">
//       <div className="modal-container">
//         <p>{message}</p>
//         <div className="modal-buttons">
//           <button className="modal-btn modal-btn-end" onClick={onConfirm}>
//             End Class
//           </button>
//           <button className="modal-btn modal-btn-cancel" onClick={onCancel}>
//             Cancel
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Modal;

import React from "react";
import "./Modal.css";

function Modal({
  onConfirm,
  onCancel,
  selectedReason,
  setSelectedReason,
  interruptionReason,
  setInterruptionReason,
  customReason,
  setCustomReason,
}) {
  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <h2>End Class</h2>
        <p>Select the reason for ending the class:</p>
        <select
          className="reason-dropdown"
          value={selectedReason}
          onChange={(e) => setSelectedReason(e.target.value)}
        >
          {/* <option value="">Select Reason</option> */}
          <option value="Class Completed">Class Completed</option>
          <option value="Class Interrupted">Class Interrupted</option>
        </select>

        {selectedReason === "Class Interrupted" && (
          <div className="interruption-reasons">
            <p>Reason for interruption:</p>
            <select
              className="reason-dropdown"
              value={interruptionReason}
              onChange={(e) => setInterruptionReason(e.target.value)}
            >
              <option value="">Select Interruption Reason</option>
              <option value="Student didn't show up for the class">
                Student didn't show up for the class
              </option>
              <option value="Student didn't show any interest">
                Student didn't show any interest
              </option>
              <option value="Student got disconnected">
                Student got disconnected
              </option>
              <option value="I got disconnected">I got disconnected</option>
              <option value="Other">Other</option>
            </select>
            {interruptionReason === "Other" && (
              <textarea
                className="custom-reason-input"
                placeholder="Type your reason here..."
                value={customReason}
                onChange={(e) => setCustomReason(e.target.value)}
              />
            )}
          </div>
        )}

        <div className="modal-buttons">
          <button className="modal-btn modal-btn-end" onClick={onConfirm}>
            End Class
          </button>
          <button className="modal-btn modal-btn-cancel" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
