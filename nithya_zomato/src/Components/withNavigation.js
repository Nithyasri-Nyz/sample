
import React from 'react';
import { useNavigate } from 'react-router-dom';

const withNavigate = (WrappedComponent) => {
    return (props) => {
        const navigate = useNavigate();
        return <WrappedComponent navigate={navigate} {...props} />;
    };
};

export default withNavigate;
