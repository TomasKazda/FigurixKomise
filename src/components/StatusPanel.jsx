import React from 'react'
import "./StatusPanel.css"

const StatusPanel = () => {

    return (
        <div className="statuspanel">
            <span className="subbox1">
                <span className="last"> 
                    <span>your time:</span>
                    <span>999</span>
                </span>
                <span className="fail">
                    <span>fails:</span>
                    <span>5</span>
                </span>
            </span>
            <span className="subbox2">
                <span className="best">
                    <span>best time:</span>
                    <span>111</span>
                </span>
            </span>
        </div>
    );
}

export default StatusPanel;