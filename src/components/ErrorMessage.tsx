// src/components/ErrorMessage.tsx
import React from 'react';

interface ErrorMessageProps {
    message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => (
    <div style={{ color: 'red' }}>
        <h2>Error:</h2>
        <pre>{message}</pre>
    </div>
);

export default ErrorMessage;
