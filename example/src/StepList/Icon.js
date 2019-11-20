import React, { useState } from 'react';
import { StepList, Step } from 'basic-react-steps'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import orbit from './icons/orbit.svg'
import telescope from './icons/telescope.svg'
import ufo from './icons/ufo.svg'
import uranus from './icons/uranus.svg'
import { description1, description2, description3, description4, title1, title2, title3, title4, icon } from './Const';


function Icon() {
    const [stepNumber, setStepNumber] = useState(1);
    const minStepNumber = 0;
    const maxStepNumber = 3

    return (
        <div style={{ display: "flex", flexFlow: "column" }}>
            <StepList stepNumber={stepNumber}>
                <Step icon={<img alt="shield" src={orbit} />} title={title1} description={description1} />
                <Step icon={<img alt="worthTheWait" src={telescope} />} title={title2} description={description2} />
                <Step icon={<img alt="worthTheWait" src={ufo} />} title={title3} description={description3} />
                <Step icon={<img alt="worthTheWait" src={uranus} />} title={title4} description={description4} />
            </StepList>
            <br />

            <div style={{ display: "flex", flexFlow: "row", justifyContent: "center" }}>
                <button onClick={() => (stepNumber !== minStepNumber) && setStepNumber(stepNumber - 1)} >Previous</button>
                <button onClick={() => (stepNumber !== maxStepNumber) && setStepNumber(stepNumber + 1)} >Next</button>
            </div>

            <br />
            <SyntaxHighlighter language="javascript" style={docco}>
                {icon}
            </SyntaxHighlighter>
        </div>
    )
}

export default Icon
