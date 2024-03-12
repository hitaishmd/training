import React from 'react';

interface DisplayErrorsProps {
    errors?: string[];
}

const DisplayErrors: React.FC<DisplayErrorsProps> = (props) => {
    const style = { color: 'red' };

    return (
        <>
            {props.errors && Array.isArray(props.errors) && props.errors.length > 0 && (
                <ul style={style}>
                    {props.errors.map((error, index) => <li key={index}>{error}</li>)}
                </ul>
            )}
        </>
    );
};

export default DisplayErrors;
