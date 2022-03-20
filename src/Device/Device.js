import React from 'react';

const Device = (props) => {
    return (
        <div style={{ border: ' 2px solid green', margin: '5px' }}>
            <h2>It's me:{props.name}</h2>
            <h3>Again button:{props.steps}</h3>
        </div>
    );
};

export default Device;