import React from 'react';

function ResetButton(props) {
    return (
        <button
            onClick={() => {
                props.resetButton();
            }}
        >
        RESET
        </button>
    )
}
export default ResetButton;