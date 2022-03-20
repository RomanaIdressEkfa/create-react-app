import React, { useEffect, useState } from 'react';
import Device from '../Device/Device';

const Watch = () => {
    const [steps, setSteps] = useState(0);
    const increaseSteps = () => {
        const newSteps = steps + 1;
        setSteps(newSteps);
    }
    const increaseSteps2 = () => {
        const newSteps2 = steps - 1;
        setSteps(newSteps2);
    }
    useEffect(() => {
        console.log(steps);
    }, [steps])
    return (
        <div>
            <h1>Hello! I am react.</h1>
            <h3>Use Steps:{steps}</h3>
            <button onClick={increaseSteps}>Steps Button.</button>
            <button onClick={increaseSteps2}>Steps Button-.</button>
            <Device name="Ekfa" steps={steps}></Device>
        </div>
    );
};

export default Watch;