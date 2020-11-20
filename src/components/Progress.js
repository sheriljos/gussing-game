import React from 'react';
import { Typography } from '@material-ui/core';
import './Progress.css';

const Progress = ({ attempt, listItems }) => {
    if (attempt > 0) {
        return(
            <div>
                <Typography style={{ marginTop: "20px"}} className="progress-bar" variant="h6">Guess # { attempt }</Typography>
                <ul className="list-items">
                    { listItems }
                </ul>
            </div>
        )
    }

    return(
        <div>
            <Typography style={{ marginTop: "20px"}} className="progress-bar" variant="h6">Tin tin</Typography>
        </div>
    )
}

export default Progress;