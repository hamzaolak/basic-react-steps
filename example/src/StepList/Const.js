import { LoremIpsum } from "lorem-ipsum";

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
export const title1 = lorem.generateWords(2).toUpperCase();
export const title2 = lorem.generateWords(2).toUpperCase();
export const title3 = lorem.generateWords(2).toUpperCase();
export const title4 = lorem.generateWords(2).toUpperCase();

export const description1 = lorem.generateSentences(1);
export const description2 = lorem.generateSentences(1);
export const description3 = lorem.generateSentences(1);
export const description4 = lorem.generateSentences(1);

export const simpleUsageCode =
    `function SimpleUsage() {
    const [stepNumber, setStepNumber] = useState(1);
    const minStepNumber = 0;
    const maxStepNumber = 3

    return (
        <div>
            <StepList stepNumber={stepNumber}>
                <Step />
                <Step />
                <Step />
                <Step />
            </StepList>
            <button onClick={() => (stepNumber !== minStepNumber) && setStepNumber(stepNumber - 1)} >Previous</button>
            <button onClick={() => (stepNumber !== maxStepNumber) && setStepNumber(stepNumber + 1)} >Next</button>
        </div>
    )
}`

export const titleAndDescription =
    `function TitleAndDescription() {
    const [stepNumber, setStepNumber] = useState(1);
    const minStepNumber = 0;
    const maxStepNumber = 3
    return (
        <div>
            <StepList stepNumber={stepNumber}>
                <Step title={title1} description={description1} />
                <Step title={title2} description={description2} />
                <Step title={title3} description={description3} />
                <Step title={title4} description={description4} />
            </StepList>
            <button onClick={() => (stepNumber !== minStepNumber) && setStepNumber(stepNumber - 1)} >Previous</button>
            <button onClick={() => (stepNumber !== maxStepNumber) && setStepNumber(stepNumber + 1)} >Next</button>
        </div>
    )
}`


export const icon =
    `...
import orbit from './icons/orbit.svg'
import telescope from './icons/telescope.svg'
import ufo from './icons/ufo.svg'
import uranus from './icons/uranus.svg'

function Icon() {
    const [stepNumber, setStepNumber] = useState(1);
    const minStepNumber = 0;
    const maxStepNumber = 3

    return (
        <div>
            <StepList stepNumber={stepNumber}>
                <Step icon={<img alt="shield" src={orbit} />} title={title1} description={description1} />
                <Step icon={<img alt="worthTheWait" src={telescope} />} title={title2} description={description2} />
                <Step icon={<img alt="worthTheWait" src={ufo} />} title={title3} description={description3} />
                <Step icon={<img alt="worthTheWait" src={uranus} />} title={title4} description={description4} />
            </StepList>
            <button onClick={() => (stepNumber !== minStepNumber) && setStepNumber(stepNumber - 1)} >Previous</button>
            <button onClick={() => (stepNumber !== maxStepNumber) && setStepNumber(stepNumber + 1)} >Next</button>
        </div>
    )
}`