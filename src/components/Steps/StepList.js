import React, { cloneElement, Children } from 'react'
import './Steps.css';

const StepList = ({ children, stepNumber, ...rest}) => {
    const filteredChildren = React.Children.toArray(children).filter(child => !!child);

    return (
        <div {...rest} className="steps" >
            {Children.map(filteredChildren, (child, index) => {
                const stepStatus = (stepNumber > index && 'success')
                    || (stepNumber === index && 'current')
                    || 'wait';
                const childProps = {
                    status: stepStatus
                }
                return cloneElement(child, childProps);
            })}
        </div>
    )
}

export default StepList