import React from 'react';
import { Steps, Step } from 'components/Steps';

function App() {
    return (
        <Steps stepNumber={2}>
            <Step />
            <Step />
            <Step />
            <Step />
        </Steps>
    );
}

export default App;
