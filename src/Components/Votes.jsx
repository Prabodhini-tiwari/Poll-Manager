import React from "react";
const Votes = ({options, handlevote, isResultShown }) => {
    return (
        <div className="btn">
            <div >
                <button   onClick={() => handlevote(0)} disabled={isResultShown}   >{options[0]}</button>
            </div>
            <div>
                <button   onClick={() => handlevote(1)}  disabled={isResultShown} >{options[1]}</button>
            </div>


        </div>

    )
}

export default Votes;