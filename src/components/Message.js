import React from 'react';
import MuiAlert from '@material-ui/lab/Alert';

const Message = ({message}) => {
    const { color, value } = message;

    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    }

    return(
        <div className="message">
            <Alert severity={ color }>{ value }</Alert>
        </div>
    )
}

export default Message;