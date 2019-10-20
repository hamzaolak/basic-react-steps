import React, { useState, Fragment } from 'react';
import { Steps, Step } from 'components/Steps';

function App() {
    const [count, setCount] = useState(0);
    return (
        <Fragment>
            <Steps stepNumber={count}>
                <Step
                    title="Lorem Ipsum"
                    description="Duis ut turpis id sapien vulputate laoreet a vel purus. "
                    />
                <Step
                    title="Mauris tempor"
                    description="Mauris tempor orci eu congue posuere. Proin rhoncus, diam egestas varius volutpat,
                        dui elit gravida est, "
                    />
                <Step
                    title="Suspendisse semper"
                    description="Suspendisse semper enim est, eu scelerisque leo ullamcorper ut.
                        Nunc tincidunt urna id nulla molestie commodo.
                        Maecenas in lacus quis nulla lacinia vulputate. "
                    />
                <Step
                    title="Quisque sit amet"
                    description="Quisque sit amet massa eu eros lacinia ultrices. Sed condimentum
                        augue sit amet ipsum molestie malesuada. Praesent rhoncus turpis at congue pretium.
                        Integer luctus cursus turpis, id scelerisque lectus hendrerit vitae. Proin rhoncus purus lorem, quis convallis
                        neque pulvinar a. Sed cursus ultricies
                        lorem, sed rutrum lorem finibus non. Praesent porta euismod lectus id aliquam."
                    />
            </Steps>
            <br/>
            <button onClick={() => setCount(count + 1)}>Increase Count</button>
            <br/>
            Count : {count}
        </Fragment>
    );
}

export default App;
