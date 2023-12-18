import React from 'react'
import '../styles/ConfirmationDialogue.css';
import { useTheme } from '../ThemeContext';

function ConfirmationDialogue({ isValid, submitData, confirmation, setConfirmation }) {
  const [theme] = useTheme();
  return (
    <div className="modal" id="confirmation-dialogue" style={!confirmation ? { display: 'none' } : {}}>
      <div className={`modal-content confirmation-wrapper ${confirmation ? 'confirmation-wrapper--open' : 'confirmation-wrapper--close'} ${theme === "dark" ? "dark" : ""} `}>

        <h1 className={`lead-text ${theme === "dark" ? "dark" : ""}`}>Are you sure everything is correct?</h1>
        <p style={{ marginBottom: '30px' }} className='paragraph'>You won't be able to edit your reservation.</p>
        <button aria-label="edit reservation" onClick={() => {
          setConfirmation(false)
        }} type="button" className="yellow-rounded paragraph confirmation-false">Cancel</button>
        <button aria-label="submit reservation" type="button" onClick={() => {
          if (isValid) {
            submitData();
          }
        }} className="yellow-rounded paragraph confirmation-true">All correct</button>
      </div>
    </div>
  )
}

export default ConfirmationDialogue