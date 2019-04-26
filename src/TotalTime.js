import React from 'react';

function TotalTime(props) {
    return (
        <form>
            <div className="form-group"> 
            <p>{props.times}</p>
            <input 
                value={props.total}
                onChange={(e) => {
                    props.handleInput(e.target.value);
                }}
                type="number" 
                className="form-control" 
                id="totalTime" 
                placeholder="Input Total Time" />    
            </div>        
        </form> 
    )
}


export default TotalTime;