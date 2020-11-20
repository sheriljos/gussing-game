import React from 'react';
import { Alert } from '@material-ui/lab/Alert';
// import MuiAlert from '@material-ui/lab/Alert';

const Message = ({ message }) => {
    return(
        <div>
            <Alert severity="error">{ message }</Alert>
        </div>
    );
}

export default Message;