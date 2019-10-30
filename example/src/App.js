import React from 'react';
import { StepList, Step } from 'basic-react-steps'
import { LoremIpsum } from "lorem-ipsum";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const lorem = new LoremIpsum({
    sentencesPerParagraph: {
        max: 8,
        min: 4
    },
    wordsPerSentence: {
        max: 16,
        min: 4
    }
});

const simpleUsageCode =
`<StepList stepNumber={2}>
    <Step />
    <Step />
    <Step />
    <Step />
</StepList>`

const titleDescriptionUsageCode =
`<StepList stepNumber={1}>
    <Step title={title1} description={description1} />
    <Step title={title2} description={description2} />
    <Step title={title3} description={description3} />
</StepList>`

function App() {

    return (
        <div>
            <h1>basic-react-steps</h1>
            <h2>Simple Usage</h2>
            <SyntaxHighlighter language="javascript" style={docco}>
                {simpleUsageCode}
            </SyntaxHighlighter>
            <div style={{ margin: '10px' }}>
                <StepList stepNumber={2}>
                    <Step />
                    <Step />
                    <Step />
                    <Step />
                </StepList>
            </div>
            <h2>Title and Description</h2>
            <SyntaxHighlighter language="javascript" style={docco}>
                {titleDescriptionUsageCode}
            </SyntaxHighlighter>
            <div style={{ margin: '10px' }}>
                <StepList stepNumber={1}>
                    <Step title={lorem.generateWords(2).toUpperCase()} description={lorem.generateSentences(1)} />
                    <Step title={lorem.generateWords(2).toUpperCase()} description={lorem.generateSentences(1)} />
                    <Step title={lorem.generateWords(2).toUpperCase()} description={lorem.generateSentences(1)} />
                </StepList>
            </div>
        </div>
    );
}

export default App;
