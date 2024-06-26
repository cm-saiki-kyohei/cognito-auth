import React from 'react';

interface IdTokenDisplayProps {
    token: string;
}

const IdTokenDisplay: React.FC<IdTokenDisplayProps> = ({ token }) => (
    <div>
        <h2>ID Token:</h2>
        <pre>{token}</pre>
    </div>
);

export default IdTokenDisplay;
