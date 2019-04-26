import React from 'react';

function PauseUnpauseButton(props) {
    return (
        <button
            onClick={() => {
                props.pauseButton()
            }}
        >
        PAUSE / UNPAUSE
        </button>
    )
}
export default PauseUnpauseButton;