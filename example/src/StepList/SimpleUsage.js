import React, { useState } from 'react';
import { StepList, Step } from 'basic-react-steps'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import {
    simpleUsageCode,
} from './Const'

function SimpleUsage() {
    const [stepNumber, setStepNumber] = useState(1);
    const minStepNumber = 0;
    const maxStepNumber = 3

    return (
        <div style={{ display: "flex", flexFlow: "column" }}>
            <StepList stepNumber={stepNumber}>
                <Step />
                <Step />
                <Step />
                <Step />
            </StepList>
            <br />

            <div style={{ display: "flex", flexFlow: "row", justifyContent: "center" }}>
                <button onClick={() => (stepNumber !== minStepNumber) && setStepNumber(stepNumber - 1)} >Previous</button>
                <button onClick={() => (stepNumber !== maxStepNumber) && setStepNumber(stepNumber + 1)} >Next</button>
            </div>

            <br />
            <SyntaxHighlighter language="javascript" style={docco}>
                {simpleUsageCode}
            </SyntaxHighlighter>
        </div>
    )
}

export default SimpleUsage
