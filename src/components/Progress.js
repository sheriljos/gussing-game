import React from 'react';
import { Typography } from '@material-ui/core';
import './Progress.css';

const Progress = ({ attempt, listItems }) => {
    if (attempt > 0) {
        return(
            <div style={{ marginBottom: "10px"}}>
                <Typography style={{ marginTop: "20px"}} className="progress-bar" variant="h6">Guess # { attempt }</Typography>
                <div className="list-items">
                    { listItems }
                </div>
            </div>
        )
    }

    return(
        <div>
            <Typography style={{ marginTop: "20px"}} className="progress-bar" variant="h6" />
        </div>
    )
}

export default Progress;